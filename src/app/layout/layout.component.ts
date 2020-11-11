import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SingInComponent} from '../shared/modal/sing-in/sing-in.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private modalDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPopup() {
   this.modalDialog.open(SingInComponent, {
     autoFocus: true,
     data: {
       singUp: false
     }
   })
  }
}
