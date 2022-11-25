import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionDetailComponent } from './production-detail/production-detail.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'login', component:LoginComponent},
  {path: 'productions', component:ProductionsComponent}, 
  {path: 'production/:id', component:ProductionDetailComponent},


  {path: '**', component: NotFoundComponent}
 ];

 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  