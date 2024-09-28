import axios from "axios";

type PaypalData = {
  link: string;
  paymentID: string;
};

async function generateAccessToken(): Promise<string> {
  try {
    const response = await axios({
      url: process.env.PAYPAL_BASE_URL + "/v1/oauth2/token",
      method: "POST",
      data: "grant_type=client_credentials",
      auth: {
        username: process.env.PAYPAL_APP_CLIENT_ID || "",
        password: process.env.PAYPAL_APP_SECRET || "",
      },
    });

    return (await response.data.access_token) ?? "";
  } catch (err) {
    throw err;
  }
}

export async function createOrder(): Promise<PaypalData> {
  try {
    const accessToken = await generateAccessToken();

    const response = await axios({
      url: process.env.PAYPAL_BASE_URL + "/v2/checkout/orders",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            items: [
              {
                name: "Chapel Pad",
                description: "subscription",
                quantity: "1",
                unit_amount: {
                  currency_code: "USD",
                  value: "100.00",
                },
              },
            ],
            amount: {
              currency_code: "USD",
              value: "100.00",
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: "100.00",
                },
              },
            },
          },
        ],
      }),
    });

    return {
      link: await response.data.links.find((l: any) => l.rel === "approve")
        .href,
      paymentID: await response.data.id,
    };
  } catch (err) {
    throw err;
  }
}

export async function capturePayment(paymentID: string) {
  try {
    const accessToken = await generateAccessToken();

    const response = await axios({
      url:
        process.env.PAYPAL_BASE_URL +
        `/v2/checkout/orders/${paymentID}/capture`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await response.data;
  } catch (err) {
    throw err;
  }
}
