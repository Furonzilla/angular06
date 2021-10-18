import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  model: User = new User();

  onSubmit() {
    // form submitted
    console.log('form submitted');
  }

  constructor() {}

  ngOnInit(): void {}
}
