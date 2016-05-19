import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet,ROUTER_PROVIDERS,ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HomeComponent } from './home';
import { LoginComponent } from './login.component';
import { AddMemberComponent } from './addMember.component';

@Component({
  selector: 'my-app',
  directives: [RouterOutlet,ROUTER_DIRECTIVES],
  template: `
  <div class="container body-container">
    <nav>
      <a [routerLink]="['AddMember']">AddMember</a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
	providers: [
    	ROUTER_PROVIDERS
	]
})
@RouteConfig([
  { path: '/home', component: HomeComponent, name: 'Home' },
  { path: '/login', component: LoginComponent, name: 'Login' , useAsDefault:true  },
  { path: '/addMember', component: AddMemberComponent, name: 'AddMember' }

])
export class AppComponent { }
