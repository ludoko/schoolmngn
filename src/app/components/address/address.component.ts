import { Address } from './../../data/address';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/data/common/constants';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  @Input('addressForm') addressForm;
  states = Constants.STATES;

  constructor(private fb: FormBuilder) { }

  static createForm(fb: FormBuilder): FormGroup {
    const addressForm = fb.group({
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(5)])
      ],
    });
    return addressForm;
  }

  static setValue(value: Address): any {
    if (value) {
      return {
        street: value.street,
        streetNumber: value.streetNumber,
        city: value.city,
        state: value.state,
        zipCode: value.zipCode,
      };
    } else {
      return {
        street: '',
        streetNumber: '',
        city: '',
        state: '',
        zipCode: '',
      };
    }
  }


  // @Input('address')
  // set address(value: Address) {
  //   // this.addressForm.patchValue({
  //   //   street: '',
  //   //   streetNumber: '',
  //   //   city: '',
  //   //   state: '',
  //   //   zipCode: '',
  //   // });
  // }
}
