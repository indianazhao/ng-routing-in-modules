import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SecondTwoComponent } from './../../modules/second/two/second-two.component';
import { SecondOneComponent } from './../../modules/second/one/second-one.component';
import { FirstTwoComponent } from './../../modules/first/two/first-two.component';
import { FirstOneComponent } from './../../modules/first/one/first-one.component';
import { MainSecondComponent } from 'src/modules/second/main/main-second.component';
import { MainFirstComponent } from 'src/modules/first/main/main-first.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,

    MainFirstComponent,
    MainSecondComponent,

    FirstOneComponent,
    FirstTwoComponent,
    SecondOneComponent,
    SecondTwoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
})
export class MainModule { }
