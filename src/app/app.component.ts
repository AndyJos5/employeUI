import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestion des employees';
  /**
   *
   */
  constructor(private auth:AuthenticationService) {

    
  }
  isLogin(){
    return this.auth.isAuthenticated()
  }
}
