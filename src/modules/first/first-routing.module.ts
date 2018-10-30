import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainFirstComponent } from './main/main-first.component';
import { FirstTwoComponent } from './two/first-two.component';
import { FirstOneComponent } from './one/first-one.component';

const firstRoutes: Routes = [
  { path: 'first', component: MainFirstComponent, children: [
    { path: '', component: FirstOneComponent},
    { path: 'one', component: FirstOneComponent},
    { path: 'two', component: FirstTwoComponent},
  ]}
  // { path: 'first/one', component: FirstOneComponent },
  // { path: 'first/two', component: FirstTwoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(firstRoutes)
  ],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
