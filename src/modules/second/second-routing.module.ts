import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSecondComponent } from './main/main-second.component';
import { SecondTwoComponent } from './two/second-two.component';
import { SecondOneComponent } from './one/second-one.component';

const secondRoutes: Routes = [
  { path: 'second', component: MainSecondComponent, children: [
    { path: '', component: SecondOneComponent},
    { path: 'one', component: SecondOneComponent},
    { path: 'two', component: SecondTwoComponent},
  ]}
  // { path: 'second/one', component: SecondOneComponent },
  // { path: 'second/two', component: TwoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(secondRoutes)
  ],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
