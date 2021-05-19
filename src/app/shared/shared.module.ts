import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import {RouterModule} from '@angular/router';



import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MatIconModule,
    MatButtonModule]
})
export class SharedModule { }
