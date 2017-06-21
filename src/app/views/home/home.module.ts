import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentListContainer } from './containers/document-list.container';
import { DocumentComponent } from './components/document.component';
import { HomeRoutingModule } from './home.routing';
import { HomeView } from './home.view';
import { DocumentService } from './document.service';
import { MdListModule, MdGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    DocumentListContainer,
    DocumentComponent,
    HomeView
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdListModule,
    MdGridListModule
  ],
  providers: [
    DocumentService
  ]
})

export class HomeModule {}
