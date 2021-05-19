import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListingComponent } from './news-listing/news-listing.component';


const routes: Routes = [
  { path: 'list', component: NewsListingComponent },
  { path: '', component: NewsListingComponent },
  { path: 'details', component: NewsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
