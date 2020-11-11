import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
form: any;
  constructor(private dialogRef: MatDialogRef<SingInComponent>,
              private modalDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password_repeat: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  changePopup(singUp?: boolean) {
    this.dialogRef.close();
    this.modalDialog.open(SingInComponent, {
      autoFocus: true,
      data: {
        singUp
      }
    });
  }

  submitForm() {
    if(this.data.singUp) {
      console.log(this.form.value)
    } else {
      console.log(this.form.value)
    }
  }

  close() {
    this.dialogRef.close();
  }
}
