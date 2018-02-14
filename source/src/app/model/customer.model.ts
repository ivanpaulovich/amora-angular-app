export class Customer {
    public customerId: string;
    public personnummer: string;
    public name: string;
    public accounts: Account[] = [];
    constructor() { }
}
