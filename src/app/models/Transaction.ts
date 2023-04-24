import {IAccount} from "./Account";
import {ICategory} from "./Category";

export interface ITransaction {
  id: number;
  senderIban: string;
  description: string;
  account: IAccount;
  sendDate: Date;
  amount: number;
  category: ICategory
}
