import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiaryComponent} from './diary.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';



@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: DiaryComponent
    }]),
    MatTableModule,
    CdkTableModule
  ],
  exports: [RouterModule]
})
export class DiaryModule { }
