
import {Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    constructor(public snackBar: MdSnackBar) {}

    items = [1,2,3,4,5,6];

    alert(message: string) {
    this.snackBar.open(message, "X", {
      duration: 2000,
    });
  }
}
