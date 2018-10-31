import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      firstName: '',
      // lastName: { value: 'n/a', disabled: true },
      lastName: '',
      email: '',
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
}
