import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { authenticationGuard } from './service/authentication.guard';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate:[authenticationGuard] },
  { path: "connexion", component: LoginComponent },
  { path: "inscription", component: SignupComponent },
  {path:"deconnexion",component:LogoutComponent},






  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
