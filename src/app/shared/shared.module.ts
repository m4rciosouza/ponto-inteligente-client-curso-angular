import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorIntl } from '@angular/material';

import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl, TipoPipe, DataPipe } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MascaraDirective,
  	TipoPipe,
  	DataPipe
  ],
  exports: [
  	MascaraDirective,
  	TipoPipe,
    DataPipe
  ],
  providers: [
  	PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
