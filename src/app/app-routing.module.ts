import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SigninComponent } from './components/SigninComponent/s';
import { SigninComponent } from './Component/signin/signin.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import {HomepageComponent} from'./Component/homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [

  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'login', component: SigninComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'navbar',component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


