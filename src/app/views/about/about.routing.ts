import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutView } from './about.view';


const routes: Routes = [
    { path: '', component: AboutView }
];

@NgModule({
  declarations: [
    AboutView
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AboutRoutingModule {}
