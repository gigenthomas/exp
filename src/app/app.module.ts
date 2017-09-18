import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService } from './hero.service';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {JokeComponent} from "./joke.component";
import {JokeListComponent} from "./jokelist.component";
import {JokeFormComponent} from "./jakeform.component";
import { D3Service } from 'd3-ng2-service';
import { BrushZoom2Component } from './brushzoom2.component';
import { D3TreeComponent } from './d3tree.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    BrushZoom2Component,
    D3TreeComponent
  ],
  providers: [ HeroService , D3Service],
  bootstrap: [ AppComponent ]
})
export class AppModule {


}
