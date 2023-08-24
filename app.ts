import { CompanyAccount } from "./class/CompanyAccount";
import { DifferentAccount } from "./class/DifferentAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.withdraw(5);
console.log(companyAccount);
const differentAccount: DifferentAccount = new DifferentAccount("Felipe", 13);
differentAccount.deposit();
console.log(differentAccount);
