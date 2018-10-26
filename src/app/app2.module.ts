import { App2RoutingModule } from './app2-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App2Component } from './app2.component';
// import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';

@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    BrowserModule,
    // FirstModule,
    SecondModule,
    App2RoutingModule,
  ],
  providers: [],
  bootstrap: [App2Component]
})
export class App2Module { }
