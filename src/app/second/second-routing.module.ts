import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';

const secondRoutes: Routes = [
  { path: 'second', component: MainComponent, children: [
    { path: '', component: OneComponent},
    { path: 'one', component: OneComponent},
    { path: 'two', component: TwoComponent},
  ]}
  // { path: 'second/one', component: OneComponent },
  // { path: 'second/two', component: TwoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(secondRoutes)
  ],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
