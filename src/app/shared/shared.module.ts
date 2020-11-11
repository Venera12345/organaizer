import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import { ModalApproveComponent } from './modal/modal-approve/modal-approve.component';
import { SingInComponent } from './modal/sing-in/sing-in.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalApproveComponent,
    SingInComponent
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([]),
    ReactiveFormsModule
  ]
})
export class SharedModule { }
