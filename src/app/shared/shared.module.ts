import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';


import {RouterModule} from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsListComponent } from './components/news-list/news-list.component';





@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NavItemComponent,
    NewsItemComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports: [NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NewsItemComponent,
    NewsListComponent,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule]
})
export class SharedModule { }
