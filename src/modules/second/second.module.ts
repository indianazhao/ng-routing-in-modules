import { SecondRoutingModule } from './second-routing.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SecondOneComponent } from './one/second-one.component';
import { SecondTwoComponent } from './two/second-two.component';
import { MainSecondComponent } from './main/main-second.component';

@NgModule({
  declarations: [
    SecondOneComponent,
    SecondTwoComponent,
    MainSecondComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ],
})
export class SecondModule { }
