import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public login: string = "";
  public password: string = "";
  public nomEtPrenom: string = "";

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Tentative d'authentification avec : email : " + this.login + " / password : " + this.password);
    this.authService.isLoggedIn = false;
    this.authService.authentification(this.login,this.password)
                    .subscribe( res => this.nomEtPrenom=res);
    console.log(JSON.stringify(this.nomEtPrenom));
    if(this.nomEtPrenom.length > 0) {
      console.log('Reussie');
      this.authService.isLoggedIn = true;
    } else {
      console.log('Non reussie');
    }
    this.authService.firstname = this.nomEtPrenom[0];
    this.authService.lastname = this.nomEtPrenom[1];
    this.authService.email = this.login;
  }

  logout(){
    this.authService.isLoggedIn = false;
  }

}
