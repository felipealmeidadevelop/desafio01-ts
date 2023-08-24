import { DioAccount } from "./DioAccount";

export class DifferentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = () => {
    this.setBalance(this.getBalance() + 10);
  };
}
