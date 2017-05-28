import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';

import { Router } from '@angular/router-deprecated';
import { LoginService } from './login.service';


@Component({
  selector: 'my-app',
  templateUrl : '/app/login/login.component.html',
  styleUrls : [ '/app/login/login.css' ] ,
  providers : [ LoginService ] ,
  
})


export class LoginComponent {

data : string ;
error : boolean ;

 constructor(
    private loginService: LoginService, 
    private router: Router
  ) { }


    onSubmit( data ) {  

    console.log('login you submitted value:', data['name'] );  

      this.loginService.login( data['name'], data['password'] )
      .subscribe(
        (token: any) => this.router.navigate(['../Home']),
        () => { this.error = true; }
      );
    }

}
