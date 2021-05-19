import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticlModel } from 'src/app/shared/models/news.moddel';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  article: ArticlModel;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.newsService.getArticle(Number(params.get('id'))).subscribe(res => {
        console.log(res);
        this.article = res;
      });
    });
  }

}
