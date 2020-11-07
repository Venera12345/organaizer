import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPurchaseComponent} from './list-purchase.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ListPurchaseComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: ListPurchaseComponent
        }]),
        FormsModule
    ],
  exports: [RouterModule]
})
export class ListPurchaseModule { }
