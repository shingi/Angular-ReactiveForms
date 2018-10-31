import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // this is the Form Model
  customerForm: FormGroup;
  // this is the data model
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      // lastName: { value: 'n/a', disabled: true },
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      notification: 'email',
      sendCatalog: true
    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData(): void {
    // this.customerForm.setValue({
    //   firstName: 'Shingi',
    //   lastName: 'Mutandwa',
    //   email: 'shingi@test.com',
    //   sendCatalog: false
    // });
    this.customerForm.patchValue({
      firstName: 'Shingi',
      lastName: 'Mutandwa'
    });
  }

  setNotification(notifyVia: string): void {
    // console.log(notifyVia);
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
