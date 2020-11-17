import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { OverviewComponent } from './user/overview/overview.component';
import { RepositoriesComponent } from './user/repositories/repositories.component';
import { ProjectsComponent } from './user/projects/projects.component';
import { PackagesComponent } from './user/packages/packages.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarHeatmap } from 'angular2-calendar-heatmap/dist/calendar-heatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OverviewComponent,
    RepositoriesComponent,
    ProjectsComponent,
    PackagesComponent,
    CalendarHeatmap
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
