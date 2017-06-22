import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSharedModule } from '../../home-shared.module';

import { SmartDumbView } from './smart-dumb.view';
import { DocumentItemComponent } from './components/document-item.component';
import { DocumentListContainer } from './containers/document-list.container';


@NgModule({
  declarations: [
    SmartDumbView,
    DocumentItemComponent,
    DocumentListContainer
  ],
  imports: [
    CommonModule,
    HomeSharedModule
  ],
  exports: [
    SmartDumbView
   ]
})
export class SmartDumbModule {}
