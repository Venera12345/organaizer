import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-approve',
  templateUrl: './modal-approve.component.html',
  styleUrls: ['./modal-approve.component.scss']
})
export class ModalApproveComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalApproveComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  delete() {
    if(this.data.object) {

    }
  }
}
