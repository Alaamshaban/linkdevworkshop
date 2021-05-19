import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SearchComponent]
})
export class SharedModule { }
