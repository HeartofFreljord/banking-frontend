import {IAccount} from "./Account";

export interface ITransaction {
  id: number;
  senderIban: string;
  description: string;
  account: IAccount;
  sendDate: Date;
}
