import { Component, OnInit } from '@angular/core';
import {Parish} from '../models/parish.models';
import { NgForm } from '@angular/forms';

import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
gender="male";
isShow=false;
  constructor() { }

  ngOnInit() {
  }
parishes:Parish[]=[
  {id:1,name:'Chicago'},
  {id:2,name:'Texas'},
  {id:3,name:'New Jersy'}
];

toggleDisplay() {
  this.isShow = true;
}
}
