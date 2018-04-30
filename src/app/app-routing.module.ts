import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BallListComponent } from './ball-list/ball-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: '/', pathMatch: 'full' },
  {path:'about', component: AboutComponent},
  {path:'ball-list', component: BallListComponent},
  {path:'home', component: HomeComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
