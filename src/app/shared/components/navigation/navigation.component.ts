import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  links = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'About us',
      path: '/',
      pages: [{
        name: 'Who are us?',
        path: '/'
      },
      {
        name: 'Why us?',
        path: '/'
      }]
    },

    {
      name: 'News',
      path: '/news',
      pages: [{
        name: 'News',
        path: '/news'
      },
      {
        name: 'Events',
        path: '/'
      }]
    },
    {
      name: 'Careers',
      path: '/',
      pages: [{
        name: 'Opportunities',
        path: '/'
      }]
    },
    {
      name: 'Contact Us',
      path: '/'
    },
    {
      name: 'Site Map',
      path: '/'
    },
  ];
  constructor(private sideNavService: SidenavService) {}

  ngAfterViewInit(): void {
    this.sideNavService.setSidenav(this.sidenav);
  }
}
