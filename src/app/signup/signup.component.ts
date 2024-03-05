import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  Roles: string[] = [];
  userForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    role: new FormControl('', Validators.required)
  })
  /**
   *
   */
  constructor(private auth: AuthenticationService, private util: UtilService) {


  }
  ngOnInit(): void {
    this.loadRoles()
  }
  async register() {

    const user: User = {
      username: this.userForm.controls.username.value!,
      password: this.userForm.controls.password.value!,
      email: this.userForm.controls.email.value!,
      role: this.userForm.controls.role.value!.toUpperCase(),
    }
    console.log(user);
    this.auth.register(user).subscribe({
      next: (rep) => {
        this.util.showMessage(rep.message, 'Ok')
        this.util.handleSignup(rep)
      },
      error: (err) => {
        console.log(err);
      },
    
    }
    )
  }
  loadRoles() {
    this.util.getRoles().subscribe({
      next: data => {
        this.Roles = data
      },
      error: err => {
        console.log(err);

      }
    })
  }
}
