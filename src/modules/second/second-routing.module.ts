import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSecondComponent } from './main/main-second.component';
import { SecondTwoComponent } from './two/second-two.component';
import { SecondOneComponent } from './one/second-one.component';

const secondRoutes: Routes = [
  { path: '', component: MainSecondComponent, children: [  // <-- lazyload
    { path: '', redirectTo: 'one', pathMatch: 'full' },
    { path: 'one', component: SecondOneComponent },
    { path: 'two', component: SecondTwoComponent },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(secondRoutes)
  ],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
