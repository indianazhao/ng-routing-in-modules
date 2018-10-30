import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SecondTwoComponent } from '../modules/second/two/second-two.component';
import { SecondOneComponent } from '../modules/second/one/second-one.component';
import { MainSecondComponent } from 'src/modules/second/main/main-second.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
