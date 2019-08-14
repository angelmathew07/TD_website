

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  personForm: FormGroup;
  footerMenuItems: string[];
  footerMenuIcons: any[];
  titleMenuItems: string[];

  constructor() { }

  ngOnInit() {
    this.personForm = new FormGroup({
      'username': new FormGroup({
        'title': new FormControl(''),
        'firstname': new FormControl(null),
        'middleinitial': new FormControl(null),
        'lastname': new FormControl(null)
      }),
      'email': new FormControl(null,Validators.email),
      'dob': new FormControl(null),
      'sin': new FormControl(null),
    });

   
    this.titleMenuItems = ['Miss', 'Mrs', 'Mr'];
   
  }

}