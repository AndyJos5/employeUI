import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { UtilService } from '../service/util.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  /**
   *
   */
  constructor(private auth: AuthenticationService, private util: UtilService) {

  }
  ngOnInit(): void {

  }
  login() {
    let user: User = {
      username: this.userForm.controls.username.value!,
      password: this.userForm.controls.password.value!
    }
    this.auth.login(user).subscribe({
      next: (dat) => {
        this.util.handleLogin(dat)
        this.util.showMessage(dat.message, 'ok')
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
