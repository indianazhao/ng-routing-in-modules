import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SecondTwoComponent } from './../../modules/second/two/second-two.component';
import { SecondOneComponent } from './../../modules/second/one/second-one.component';
import { MainSecondComponent } from './../../modules/second/main/main-second.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,

    MainSecondComponent,

    SecondOneComponent,
    SecondTwoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
})
export class MainModule { }
