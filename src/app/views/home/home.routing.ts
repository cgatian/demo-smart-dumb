import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeView } from './home.view';

const routes: Routes = [
    { path: '', component: HomeView }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule {}

