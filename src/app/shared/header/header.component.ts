import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean;
  animationClose: boolean;
  showButton: boolean;

  constructor(private route: Router) {
  }

  ngOnInit(): void {

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

  goToLayout() {
  }
}
