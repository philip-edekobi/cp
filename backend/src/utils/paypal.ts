import axios from "axios";
import { SubscriptionDetailsDto } from "../dtos/payment";
import { SubscriptionPackagePriceMap } from "./subscription";

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

export async function createOrder(
  details: SubscriptionDetailsDto,
): Promise<PaypalData> {
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
                name: `ChapelPad ${details.package} Subscription`,
                description:
                  "A subscription to the ChapelPad Church Management Software Service",
                quantity: details.months ? details.months.toString() : "1",
                category: "DIGITAL_GOODS",
                unit_amount: {
                  currency_code: "USD",
                  value: SubscriptionPackagePriceMap.get(details.package),
                },
              },
            ],
            amount: {
              currency_code: "USD",
              value:
                (
                  parseInt(
                    SubscriptionPackagePriceMap.get(details.package)!,
                    10,
                  ) * details.months!
                ).toString() + ".00",
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value:
                    (
                      parseInt(
                        SubscriptionPackagePriceMap.get(details.package)!,
                        10,
                      ) * details.months!
                    ).toString() + ".00",
                },
              },
            },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              shipping_preference: "NO_SHIPPING",
              user_action: "PAY_NOW",
              brand_name: "ChapelPad",
              return_url: "http://localhost:53330",
              cancel_url: "http://localhost:53330",
            },
          },
        },
      }),
    });

    return {
      link: await response.data.links.find((l: any) => l.rel === "payer-action")
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
