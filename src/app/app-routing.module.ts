import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SecondOneComponent } from './../modules/second/one/second-one.component';
import { FirstTwoComponent } from './../modules/first/two/first-two.component';
import { SecondTwoComponent } from './../modules/second/two/second-two.component';
import { FirstOneComponent } from './../modules/first/one/first-one.component';
import { MainSecondComponent } from './../modules/second/main/main-second.component';
import { MainFirstComponent } from './../modules/first/main/main-first.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
