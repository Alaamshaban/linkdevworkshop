import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private SideNavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.SideNavService.toggle();
  }

}
