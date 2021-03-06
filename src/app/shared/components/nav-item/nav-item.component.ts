import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnChanges {
  @Input() navItem;
  @Input() isSubPage: boolean;
  constructor() { }

  ngOnChanges(): void {
  }

}
