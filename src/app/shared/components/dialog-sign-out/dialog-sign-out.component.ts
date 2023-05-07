import {Component, Inject, OnInit, Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'dialog-sign-out',
  template: '',
})
export class DialogSignOut {

  @Input() titulo: string = '';
  @Input() mensagem: string = 'Do you really want to leave?';
  @Input() btnNo: string = 'No';
  @Input() btnOk: string = 'Yes';

  @Output() newItemEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSignOutRef, {
      width: '250px',
      data: {
        titulo: this.titulo,
        mensagem: this.mensagem,
        btnNo: this.btnNo,
        btnOk: this.btnOk
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newItemEvent.emit(result);
    });
  }
}

@Component({
  templateUrl: 'dialog-sign-out.component.html',
})
export class DialogSignOutRef {
  titulo: string = null
  mensagem: string = null
  btnNo:string = null
  btnOk:string = null

  constructor(
    public dialogRef: MatDialogRef<DialogSignOutRef>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.titulo = data.titulo
    this.mensagem = data.mensagem
    this.btnNo = data.btnNo
    this.btnOk = data.btnOk
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}

export interface DialogData {
  titulo: string;
  mensagem: string;
  btnNo:string;
  btnOk:string
}