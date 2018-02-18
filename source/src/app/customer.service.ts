import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterCommand } from './model/register-command.model';
import { DepositCommand } from './model/deposit-command.model';
import { WithdrawCommand } from './model/withdraw-command.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Customer } from './model/customer.model';
import { BaseService } from './base.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class CustomerService extends BaseService {
  constructor(
    protected http: HttpClient) {
    super(http, 'Customers');
  }

  public register(register: RegisterCommand): Observable<Customer> {
    return this.http.post<Customer>(this.url, register, httpOptions);
  }

  public getCustomer(customerId: string): Observable<Customer> {
    const url = `${this.url}/${customerId}`;
    return this.http.get<Customer>(url);
  }

  public deposit(deposit: DepositCommand): void {
    this.http.patch(this.url + 'Deposit', deposit, httpOptions);
  }

  public withdraw(withdraw: WithdrawCommand): void {
    this.http.patch(this.url + 'Withdraw', withdraw, httpOptions);
  }
}
