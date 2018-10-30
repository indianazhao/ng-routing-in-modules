import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  { path: 'main', component: MainComponent, children: [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'first', loadChildren: './../../modules/first/first.module#FirstModule' },  // <-- lazyload
    { path: 'second', loadChildren: './../../modules/second/second.module#SecondModule' },  // <-- lazyload
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}
