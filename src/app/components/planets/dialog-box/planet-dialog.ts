import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Planet } from 'src/app/model/Planet';

@Component({
  selector: 'planet-dialog',
  templateUrl: './planet-dialog.html',
})
export class PlanetDialog {

  modalData: Planet;
  action: String = null;

  constructor(
    public dialogRef: MatDialogRef<PlanetDialog>, @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.modalData = data.modalData
    this.action = data.action
  }

  submit() {
    this.dialogRef.close({ event: 'close', data: this.modalData });
  }

  closeModal() {
    this.dialogRef.close();
  }

}
