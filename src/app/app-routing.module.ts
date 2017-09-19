import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import {JokeComponent} from "./joke.component";
import {JokeListComponent} from "./jokelist.component";
import { BrushZoom2Component } from './brushzoom2.component';
import { D3TreeComponent } from './d3tree.component';
import { SignupFormComponent } from './signupform.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'joke',     component: JokeListComponent },
  { path: 'd3',     component: BrushZoom2Component },
  { path: 'd3',     component: D3TreeComponent },
  { path: 'signupform',     component: SignupFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
