import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { NewsDetailsComponent } from './news-details/news-details.component';



@NgModule({
  declarations: [
    NewsListingComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
