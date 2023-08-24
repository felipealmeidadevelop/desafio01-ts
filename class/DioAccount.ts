export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 10
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositedAmount: number): void => {
    if(this.validateStatus()){
      this.balance += depositedAmount
      console.log('Voce depositou', depositedAmount, '. Seu novo saldo é de: ', this.balance)
    }
  }

  withdraw = (withdrawnAmount: number): void => {
    if(this.validateStatus()){
      this.balance -= withdrawnAmount
      console.log('Voce depositou', withdrawnAmount, '. Seu novo saldo é de: ', this.balance)
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
