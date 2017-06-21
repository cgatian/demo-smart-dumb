import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutView } from './about.view';
import { AboutRoutingModule } from './about.routing';


@NgModule({
  imports: [
    AboutRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AboutModule {}
