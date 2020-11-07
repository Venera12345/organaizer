import { Component, OnInit } from '@angular/core';
import {ModalApproveComponent} from '../shared/modal/modal-approve/modal-approve.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  dataSource: {}[] = [
    {
      date: '10.03.2020 11:00',
      name: 'Meeting with coulege',
      description: 'It is important don`t forget presents.',
      list_purchase: ''
    },
    {
      date: '10.03.2020 11:00',
      name: 'Meeting with coulege',
      description: 'It is important don`t forget presents.',
      list_purchase: ''
    },
    {
      date: '10.03.2020 11:00',
      name: 'Meeting with coulege',
      description: 'It is important don`t forget presents.',
      list_purchase: ''
    }
  ]
  displayedColumns: string[] = ['btn', 'time', 'date', 'title', 'description', 'list-purchase'];

  constructor(private modalDialog: MatDialog) { }

  ngOnInit(): void {
  }
  delete(row) {
    this.modalDialog.open(ModalApproveComponent, {
      autoFocus: true,
      data: {delete: true, object: row}
    }).afterClosed().subscribe((res) => {
      if(res) {

      }
    })
}
}
