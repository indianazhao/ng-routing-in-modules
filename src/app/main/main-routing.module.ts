import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondTwoComponent } from './../../modules/second/two/second-two.component';
import { SecondOneComponent } from './../../modules/second/one/second-one.component';
import { FirstTwoComponent } from './../../modules/first/two/first-two.component';
import { FirstOneComponent } from './../../modules/first/one/first-one.component';
import { MainSecondComponent } from './../../modules/second/main/main-second.component';
import { MainFirstComponent } from './../../modules/first/main/main-first.component';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  { path: 'main', component: MainComponent, children: [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'first', component: MainFirstComponent, children: [
      { path: '', redirectTo: 'one', pathMatch: 'full' },
      { path: 'one', component: FirstOneComponent },
      { path: 'two', component: FirstTwoComponent },
    ]},
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
