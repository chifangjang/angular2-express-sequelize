import { Component } from '@angular/core';                             
import { NgForm }    from '@angular/common';                           
                                                                       
import { Router } from '@angular/router-deprecated';                   
import { AddMemberService } from './addmember.service';                        
                                                                       
                                                                       
@Component({                                                           
  selector: 'my-app',                                                  
  templateUrl : 'app/addmember/addmember.component.html',                            
  styleUrls : [ 'app/login/login.css' ] ,                                    
  providers : [ AddMemberService ] ,                                       
                                                                       
})                                                                     
                                                                       
                                                                       
export class AddMemberComponent {                                          
                                                                       
data : string ;                                                        
error : boolean ;                                                      
                                                                       
 constructor(                                                          
    private addMemberService: AddMemberService,                                
    private router: Router                                             
  ) { }                                                                
                                                                       
                                                                       
    onSubmit( data ) {                                                 
                                                                       
    console.log('you submitted value:', data['name'] );                
                                                                       
      this.addMemberService.login( data['name'], data['password'] )       
      .subscribe(                                                      
        (token: any) => this.router.navigate(['../Home']),             
        () => { this.error = true; }                                   
      );                                                               
    }                                                                  
                                                                       
}                                                                      
                                                                      
