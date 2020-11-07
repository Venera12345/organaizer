import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {DayBookComponent} from './day-book.component';



@NgModule({
  declarations: [DayBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: DayBookComponent
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class DayBookModule { }
