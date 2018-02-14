import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../model/account.model';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerModel: Customer = { customerId: '', name: '', personnummer: '', accounts: [] };

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    const customerId = this.route.snapshot.paramMap.get('customerId');

    this.customerService
      .getCustomer(customerId)
      .subscribe(customer => this.customerModel = customer);
  }

  realoadCustomer(event) {
    this.getCustomer();
  }
}
