import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentMenu1Component } from './content-menu-1/content-menu-1.component';
import { ContentMenu2Component } from './content-menu-2/content-menu-2.component';
import { ContentMenu3Component } from './content-menu-3/content-menu-3.component';
import { ContentMenu4Component } from './content-menu-4/content-menu-4.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'content-menu-1', component: ContentMenu1Component },
  { path: 'content-menu-2', component: ContentMenu2Component },
  { path: 'content-menu-3', component: ContentMenu3Component },
  { path: 'content-menu-4', component: ContentMenu4Component }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentMenu1Component,
    ContentMenu2Component,
    ContentMenu3Component,
    ContentMenu4Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
