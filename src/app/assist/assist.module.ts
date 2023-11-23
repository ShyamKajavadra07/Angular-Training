import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistRoutingModule } from './assist-routing.module';
import { AssistComponent } from './assist.component';


@NgModule({
  declarations: [
    AssistComponent
  ],
  imports: [
    CommonModule,
    AssistRoutingModule
  ]
})
export class AssistModule { }
