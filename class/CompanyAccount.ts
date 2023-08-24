import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (requestedLoan: number): void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + requestedLoan)
      console.log('Voce recebeu de emprestimo ', requestedLoan, '. Seu novo saldo é de: ', this.getBalance())
    }
  }
}
