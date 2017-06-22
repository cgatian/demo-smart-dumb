import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSharedModule } from '../../home-shared.module';

import { FeatureComponent } from './feature.component';
import { DocumentItemComponent } from './components/document-item.component';
import { DocumentListComponent } from './components/document-list.component';

@NgModule({
  declarations: [
    FeatureComponent,
    DocumentListComponent,
    DocumentItemComponent
  ],
  imports: [
    HomeSharedModule
  ],
  exports: [
    FeatureComponent
  ],
  providers: [],
  bootstrap: []
})
export class FeatureModule {}
