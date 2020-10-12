import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLocalStorageService } from '../../Servicies/user-local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    firstName: [ '', [Validators.required]],
    lastName: [ '', [Validators.required]],
    userName: [ '', [Validators.required]],
    password: [ '', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private localStorage: UserLocalStorageService,
  ) { }

  ngOnInit(): void {
  }

  register(){
    const user = new User();
    user.firstName = this.registerForm.value.firstName;
    user.lastName = this.registerForm.value.lastName;
    user.userName = this.registerForm.value.userName;
    user.password = this.registerForm.value.password;

    this.localStorage.create(user);
  }
}
