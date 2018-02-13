import { Component, OnInit, Input } from '@angular/core';
import { RegisterCommand } from '../model/register-command.model';
import { CustomerService } from '../customer.service';
import { Customer } from '../model/customer.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {
  ValidatorFn,
  Validators,
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  registerModel: RegisterCommand = { pin: '', name: '', initialAmount: 0 };

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): void {
    this.registerForm = this.fb.group({
      pin: ['', Validators.required],
      name: ['', Validators.required],
      initialAmount: ['', Validators.required]
    });
  }

  public register(): void {
    Object.assign(this.registerModel, this.registerForm.value);

    this.customerService
      .register(this.registerModel)
      .subscribe(customer => {
        this.router.navigate([`/customer/${customer.customerId}`]);
      });
  }
}
