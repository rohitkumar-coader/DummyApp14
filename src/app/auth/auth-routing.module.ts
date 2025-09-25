import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
 
  {
    path:'auth/login',
    component:LoginComponent,
  },  
  {
    path:'home',
    component:HomepageComponent,
  },  
  
  {
    path:'auth/signup',
    component:SignupComponent
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule, RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
