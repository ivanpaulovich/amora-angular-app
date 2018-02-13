import { Transaction } from './transaction.model';

export class Account {
    public accountId: string;
    public customerId: string;
    public currentBalance: number;
    public transactions: Transaction[] = [];
    constructor() { }
}
