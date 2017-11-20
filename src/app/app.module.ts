import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent} from "./dashboard.component";
import { AppRoutingModule} from "./app-routing.module";
import { JokeComponent} from "./joke.component";
import { JokeListComponent} from "./jokelist.component";
import { JokeFormComponent} from "./jakeform.component";
import { D3Service } from 'd3-ng2-service';
import { BrushZoom2Component } from './brushzoom2.component';
<<<<<<< HEAD
import { TreeDiagramComponent } from './treediagram.component';

import { DocumentComponent } from './document/document.component';
import { Tree2Component } from './tree2/tree2.component';
import { TreeModule } from 'ng2-tree';
=======
import { D3TreeComponent } from './d3tree.component';
import { SignupFormComponent } from './signupform.component';
>>>>>>> 17fd902ba2dc39e5ab7ab757f146994547b02809

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TreeModule
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
<<<<<<< HEAD
     TreeDiagramComponent,
      Tree2Component,
  DocumentComponent
=======
    D3TreeComponent,
    SignupFormComponent
>>>>>>> 17fd902ba2dc39e5ab7ab757f146994547b02809
  ],
  providers: [ HeroService , D3Service  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {


}
