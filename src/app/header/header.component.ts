import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenuBar: boolean = false;
  sideMenuItems: string[];
  constructor() { }

  ngOnInit(){
    this.sideMenuItems = ["Products","Claims", "Contact Us", ]
  }
  showMenu() {
    this.showMenuBar = !this.showMenuBar;
  }
}
