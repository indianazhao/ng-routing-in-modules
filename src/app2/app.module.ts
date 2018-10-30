import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondTwoComponent } from '../modules/second/two/second-two.component';
import { SecondOneComponent } from '../modules/second/one/second-one.component';
import { MainSecondComponent } from '../modules/second/main/main-second.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,

    MainSecondComponent,

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
