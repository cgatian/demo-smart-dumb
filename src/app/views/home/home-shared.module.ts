import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  exports: [
    CommonModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ]
})
export class HomeSharedModule { }
