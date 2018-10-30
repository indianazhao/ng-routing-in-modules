import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSecondComponent } from './../../modules/second/main/main-second.component';
import { MainFirstComponent } from './../../modules/first/main/main-first.component';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  {
    path: 'main', component: MainComponent, children: [
      { path: '', component: MainFirstComponent },
      { path: 'first', component: MainFirstComponent },
      { path: 'two', component: MainSecondComponent },
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}
