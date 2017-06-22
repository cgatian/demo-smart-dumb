import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { DocumentService } from './document.service';

import { HomeSharedModule } from './home-shared.module';
import { OneComponentView } from './views/one-component/one-component.view';
import { FeatureModule } from './views/feature/feature.module';
import { SmartDumbModule } from './views/smart-dumb/smart-dumb.module';

@NgModule({
  declarations: [
    OneComponentView
  ],
  imports: [
    CommonModule,
    FeatureModule,
    HomeRoutingModule,
    SmartDumbModule,
    HomeSharedModule
  ],
  providers: [
    DocumentService
  ]
})

export class HomeModule { }
