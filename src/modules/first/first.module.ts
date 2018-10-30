import { FirstRoutingModule } from './first-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstOneComponent } from './one/first-one.component';
import { FirstTwoComponent } from './two/first-two.component';
import { MainFirstComponent } from './main/main-first.component';

@NgModule({
  declarations: [
    FirstOneComponent,
    FirstTwoComponent,
    MainFirstComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ],
})
export class FirstModule { }
