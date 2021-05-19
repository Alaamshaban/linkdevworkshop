import { Component, OnInit } from '@angular/core';
import { ArticlModel } from 'src/app/shared/models/news.moddel';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {
  articles: ArticlModel[];
  pageLength: number;
  pageSize = 10;
  splicedArticles: ArticlModel[];

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
    this.serveData();
  }

  pageChangeEvent(event): void {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.splicedArticles = this.articles.slice(offset).slice(0, event.pageSize);
  }

  serveData(): void {
    this.newService.Articles.subscribe(articles => {
      this.articles = articles;
      this.pageLength = this.articles.length;
      this.splicedArticles = articles.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
    });
  }
}
