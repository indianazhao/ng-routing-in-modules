import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondTwoComponent } from './../../modules/second/two/second-two.component';
import { SecondOneComponent } from './../../modules/second/one/second-one.component';
import { MainSecondComponent } from './../../modules/second/main/main-second.component';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  { path: 'main', component: MainComponent, children: [
    { path: '', redirectTo: 'second', pathMatch: 'full' },
    { path: 'second', component: MainSecondComponent, children: [
      { path: '', redirectTo: 'one', pathMatch: 'full' },
      { path: 'one', component: SecondOneComponent },
      { path: 'two', component: SecondTwoComponent },
    ]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}
