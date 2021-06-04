import { Component } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'Keplar ';
  displayPlanets: boolean = false
  displaySuns: boolean = false;

  constructor(public matDialog: MatDialog) {
  }

  getData(dataType) {
    if (dataType == 'planet') {
      this.displaySuns = false;
      this.displayPlanets = true;
    } else if (dataType == 'sun') {
      this.displayPlanets = false;
      this.displaySuns = true;
    }
  }
}
