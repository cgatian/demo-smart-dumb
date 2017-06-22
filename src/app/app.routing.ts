import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LinksView } from './links.view';

const routes: Routes = [
  { path: '', component: LinksView },
  { path: 'docs', loadChildren: './views/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './views/about/about.module#AboutModule' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


