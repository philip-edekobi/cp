export type IRepository = {
  getByEmail: (email: string) => any;
  getById: (id: number) => any;
  create: (details: any) => any;
};
