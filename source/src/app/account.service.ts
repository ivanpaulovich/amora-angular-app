import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './model/account.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { DepositCommand } from './model/deposit-command.model';
import { WithdrawCommand } from './model/withdraw-command.model';
import { DeleteCommand } from './model/delete-command.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*' })
};

@Injectable()
export class AccountService {

  private accountsUrl = 'http://grape.westus2.cloudapp.azure.com:8000/api/Accounts';

  constructor(
    private http: HttpClient) { }

  getAccounts(customerId: string): Observable<Account[]> {
    const url = `${this.accountsUrl}/${customerId}`;
    return this.http.get<Account[]>(url);
  }

  getAll(): Observable<Account[]> {
    const url = `${this.accountsUrl}`;
    return this.http.get<Account[]>(url);
  }

  get(accountId: string): Observable<Account> {
    const url = `${this.accountsUrl}/${accountId}`;
    return this.http.get<Account>(url);
  }

  deposit(deposit: DepositCommand): Observable<any> {
    return this.http.patch(this.accountsUrl + '/Deposit', deposit, httpOptions);
  }

  delete(accountId: string): Observable<any> {
    const url = `${this.accountsUrl}/${accountId}`;
    return this.http.delete(url, httpOptions);
  }

  withdraw(withdraw: WithdrawCommand): Observable<any> {
    return this.http.patch(this.accountsUrl + '/Withdraw', withdraw, httpOptions);
  }
}
