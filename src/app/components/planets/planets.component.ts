import { Component, OnInit } from '@angular/core';
import { KeplerService } from 'src/app/services/kepler.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PlanetDialog } from './dialog-box/planet-dialog';
import { Planet } from 'src/app/model/Planet';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html'
})
export class PlanetsComponent implements OnInit {

  constructor(private keplarService: KeplerService, public matDialog: MatDialog) {
  }

  planets: Planet[] = []
  planet: Planet;

  ngOnInit(): void {
    this.keplarService.getPlanets().subscribe((data: any) => {
      this.planets = data;
    });;
  }

  openAddModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "500px";
    dialogConfig.data = {
      modalData : new Planet,
      message : "Add Planet Details",
      action : "Add"
    }
    this.matDialog.open(PlanetDialog, dialogConfig).afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.planet = result.data;
    });
  }

  openEditModal(obj) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "500px";
    dialogConfig.data = {
      modalData : obj,
      message : "Update Planet Details",
      action : "Update"
    }
    this.matDialog.open(PlanetDialog, dialogConfig).afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.planet = result.data;
    });
  }

  openDeleteModal(obj) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      modalData : obj,
      message : "Delete Planet Details",
      action : "Delete"
    }
    this.matDialog.open(PlanetDialog, dialogConfig).afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.planet = result.data;
    });
  }
}
