import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ StateModule } from './store/state.module';

@NgModule({
  imports: [
    CommonModule,
    StateModule
  ]
})
export class CoreDataModule {}
