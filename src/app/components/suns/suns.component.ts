import { Component, OnInit } from '@angular/core';
import { KeplerService } from 'src/app/services/kepler.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sun } from 'src/app/model/Sun';
import { SunDialog } from './dialog-box/sun-dialog';

@Component({
  selector: 'suns',
  templateUrl: './suns.component.html'
})
export class SunsComponent implements OnInit {

  constructor(private keplarService: KeplerService, public matDialog: MatDialog) {
  }

  suns: Sun[] = []
  sunData: Sun;

  ngOnInit(): void {
    this.keplarService.getSuns().subscribe((data: any) => {
      this.suns = data;
    });;
  }

  openAddModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "500px";
    dialogConfig.data = {
      modalData: new Sun,
      message: "Add Sun Details",
      action: "Add"
    }
    this.matDialog.open(SunDialog, dialogConfig).afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.sunData = result.data;
    });
  }

  openEditModal(obj) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "500px";
    dialogConfig.data = {
      modalData: obj,
      message: "Update Sun Details",
      action: "Update"
    }
    this.matDialog.open(SunDialog, dialogConfig).afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.sunData = result.data;
    });
  }

  openDeleteModal(obj) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      modalData: obj,
      message: "Delete Sun Details",
      action: "Delete"
    }
    this.matDialog.open(SunDialog, dialogConfig).afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.sunData = result.data;
    });
  }

  viewPlanets(obj) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.width = "auto";
    dialogConfig.data = {
      modalData: obj,
      message: "Planet Details",
      action: "View"
    }
    this.matDialog.open(SunDialog, dialogConfig).afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.sunData = result.data;
    });
  }
}
