import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';

const firstRoutes: Routes = [
  { path: 'first', component: MainComponent, children: [
    { path: '', component: OneComponent},
    { path: 'one', component: OneComponent},
    { path: 'two', component: TwoComponent},
  ]}
  // { path: 'first/one', component: OneComponent },
  // { path: 'first/two', component: TwoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(firstRoutes)
  ],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
