import { Component, ViewChild } from '@angular/core';
import {MdButtonModule, MdMenuTrigger} from '@angular/material';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent{
    title = 'Engagement Designs';

    @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

    someMethod() {
        this.trigger.openMenu();
    }
}
