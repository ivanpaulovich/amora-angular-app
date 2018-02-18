import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './model/account.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { DepositCommand } from './model/deposit-command.model';
import { WithdrawCommand } from './model/withdraw-command.model';
import { DeleteCommand } from './model/delete-command.model';
import { BaseService } from './base.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class AccountService extends BaseService {
  constructor(
    protected http: HttpClient) {
    super(http, 'Accounts');
  }

  getAccounts(customerId: string): Observable<Account[]> {
    const url = `${this.url}/${customerId}`;
    return this.http.get<Account[]>(url);
  }

  getAll(): Observable<Account[]> {
    const url = `${this.url}`;
    return this.http.get<Account[]>(url);
  }

  get(accountId: string): Observable<Account> {
    const url = `${this.url}/${accountId}`;
    return this.http.get<Account>(url);
  }

  deposit(deposit: DepositCommand): Observable<any> {
    return this.http.patch(this.url + '/Deposit', deposit, httpOptions);
  }

  delete(accountId: string): Observable<any> {
    const url = `${this.url}/${accountId}`;
    return this.http.delete(url, httpOptions);
  }

  withdraw(withdraw: WithdrawCommand): Observable<any> {
    return this.http.patch(this.url + '/Withdraw', withdraw, httpOptions);
  }
}
