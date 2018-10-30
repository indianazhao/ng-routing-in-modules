import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainFirstComponent } from './main/main-first.component';
import { FirstTwoComponent } from './two/first-two.component';
import { FirstOneComponent } from './one/first-one.component';

const firstRoutes: Routes = [
  { path: '', component: MainFirstComponent, children: [  // <-- lazyload
    { path: '', redirectTo: 'one', pathMatch: 'full' },
    { path: 'one', component: FirstOneComponent },
    { path: 'two', component: FirstTwoComponent },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(firstRoutes)
  ],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
