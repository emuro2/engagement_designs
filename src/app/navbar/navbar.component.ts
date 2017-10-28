import { Component, ViewChild } from '@angular/core';
import {MdButtonModule, MdMenuTrigger} from '@angular/material';
import './navbar.component.js';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent{
    title = 'Engagement Designs';

    ngOnInit() {

    }

    @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

    someMethod() {
        this.trigger.openMenu();
    }
}
