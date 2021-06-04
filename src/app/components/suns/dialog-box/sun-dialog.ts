import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sun } from 'src/app/model/Sun';
import { Planet } from 'src/app/model/Planet';

@Component({
  selector: 'sun-dialog',
  templateUrl: './sun-dialog.html',
})
export class SunDialog {

  modalData: Sun;
  action: String = null;
  planets: Planet[] = []

  constructor(
    public dialogRef: MatDialogRef<SunDialog>, @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.modalData = data.modalData
    this.action = data.action
    this.planets = this.modalData.planetsWithSun
  }

  submit() {
    this.dialogRef.close({ event: 'close', data: this.modalData });
  }

  closeModal() {
    this.dialogRef.close();
  }

}
