import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../model/account.model';
import { DepositCommand } from '../model/deposit-command.model';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AccountService } from '../account.service';
import { Transaction } from '../model/transaction.model';
import { ToastrService } from 'ngx-toastr';

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
    public accountService: AccountService,
    private toastr: ToastrService) { }

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
        this.currentDate = new Date();
        this.toastr.success(`You've done a deposit of $ ${this.amount}`, 'Deposit');
        this.amount = 0;
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
        this.currentDate = new Date();
        this.toastr.success( `You've done a withdraw of $ ${this.amount}`, 'Withdraw');
        this.amount = 0;
      });
  }

  delete() {
    this
      .accountService
      .delete(this.account.accountId)
      .subscribe(resp => {
        this.deleteEvent.emit(resp);
        this.toastr.success( `Your account is closed.`, 'Close Account');
      });
  }
}
