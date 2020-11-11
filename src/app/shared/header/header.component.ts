import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {SingInComponent} from '../modal/sing-in/sing-in.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean;
  animationClose: boolean;
  showButton: boolean;
  generalPage: boolean;

  constructor(private route: ActivatedRoute,
              private modalDialog: MatDialog) {
  }

  ngOnInit(): void {
console.log(window.location.href.slice(-1,0))

  }

  switchMenu() {
    if (this.showMenu) {
      this.closeMenu();
    } else {
      this.showMenu = !this.showMenu;
    }
  }

  closeMenu() {

    this.animationClose = true;
    setTimeout(() => {
      this.showMenu = !this.showMenu;
      this.animationClose = false;
    }, 1000);
  }

  openPopup(singUp?: boolean) {
    this.modalDialog.open(SingInComponent, {
      autoFocus: true,
      data: {
        singUp
      }
    })
  }
}
