import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLocalStorageService } from '../../Servicies/user-local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
s
  allUsers: User[] = this.localStorage.getAll();
  currentUser: User = null;

  loginForm = this.fb.group({
    userName: [ '', [Validators.required]],
    password: [ '', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorage: UserLocalStorageService,
  ) { }

  login(){
    this.currentUser = this.allUsers.find(user =>
      user.userName === this.loginForm.value.userName &&
      user.password === this.loginForm.value.password);

    if (this.currentUser){
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.router.navigate(['/starship']);
    } else {
      alert('L`usuari o la contrasenya no són correctes.');
    }
  }
}
