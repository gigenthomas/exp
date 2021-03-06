import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import {JokeComponent} from "./joke.component";
import {JokeListComponent} from "./jokelist.component";
import { BrushZoom2Component } from './brushzoom2.component';
import { TreeDiagramComponent } from './treediagram.component';

import { DocumentComponent } from './document/document.component';
import { Tree2Component } from './tree2/tree2.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'joke',       component: JokeListComponent },
  { path: 'd3',         component: BrushZoom2Component },
  { path: 'd3tree',     component: DocumentComponent },
  { path: 'ng2tree',      component: Tree2Component }

  

  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
