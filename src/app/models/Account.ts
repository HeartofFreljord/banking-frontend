import {ICustomer} from "./Customer";

export interface IAccount {
  id: number;
  customer: ICustomer;
  iban: string;
  balance: number;

}
