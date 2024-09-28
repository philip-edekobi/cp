import { IParishPaymentModel } from "../models/Payment";
import { models } from "../initDB";

const { ParishPayment } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IParishPaymentModel[]> {
    try {
      const parishPayments = await ParishPayment.findAll({
        attributes: publicAttributes,
      });

      return parishPayments;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: number): Promise<IParishPaymentModel | null> {
    try {
      const pp = await ParishPayment.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return pp;
    } catch (err) {
      throw err;
    }
  }

  static async getByClause<T extends IParishPaymentModel>(
    clause: Partial<T>,
  ): Promise<T[] | null> {
    try {
      const payments = await ParishPayment.findAll({
        where: { ...clause },
        attributes: publicAttributes,
      });

      return payments as T[];
    } catch (err) {
      throw err;
    }
  }

  static async create(
    details: IParishPaymentModel,
  ): Promise<IParishPaymentModel> {
    try {
      const newPp = await ParishPayment.create({ ...details });

      return newPp;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IParishPaymentModel>,
  ): Promise<IParishPaymentModel | null> {
    try {
      const newPp = await ParishPayment.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newPp[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ParishPayment.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
