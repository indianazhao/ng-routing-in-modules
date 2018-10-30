import { SecondTwoComponent } from './../modules/second/two/second-two.component';
import { SecondOneComponent } from './../modules/second/one/second-one.component';
import { FirstTwoComponent } from './../modules/first/two/first-two.component';
import { FirstOneComponent } from './../modules/first/one/first-one.component';
import { MainSecondComponent } from 'src/modules/second/main/main-second.component';
import { MainFirstComponent } from 'src/modules/first/main/main-first.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,

    MainFirstComponent,
    MainSecondComponent,

    FirstOneComponent,
    FirstTwoComponent,
    SecondOneComponent,
    SecondTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
