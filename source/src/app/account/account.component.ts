import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../model/account.model';
import { DepositCommand } from '../model/deposit-command.model';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AccountService } from '../account.service';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Output() depositEvent = new EventEmitter<any>();
  @Output() withdrawEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  currentDate = new Date();
  amount = 0;
  displayedColumns = ['transactionDate', 'amount'];
  dataSource = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    public accountService: AccountService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.account.transactions);
  }

  realoadAccount() {
    this.accountService
      .get(this.account.accountId)
      .subscribe(resp => this.account = resp);
  }

  deposit() {
    const depositCommand: DepositCommand = { accountId: this.account.accountId, customerId: this.account.customerId, amount: this.amount };

    this
      .accountService
      .deposit(depositCommand)
      .subscribe(resp => {
        this.realoadAccount();
        this.depositEvent.emit(resp);
        this.amount = 0;
        this.currentDate = new Date();
      });
  }

  withdraw() {
    const depositCommand: DepositCommand = { accountId: this.account.accountId, customerId: this.account.customerId, amount: this.amount };

    this
      .accountService
      .withdraw(depositCommand)
      .subscribe(resp => {
        this.realoadAccount();
        this.withdrawEvent.emit(resp);
        this.amount = 0;
        this.currentDate = new Date();
      });
  }

  delete() {
    this
      .accountService
      .delete(this.account.accountId)
      .subscribe(resp => {
        this.deleteEvent.emit(resp);
      });
  }
}
