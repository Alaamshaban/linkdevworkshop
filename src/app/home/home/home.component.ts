import { Component, OnInit } from '@angular/core';
import { ArticlModel } from 'src/app/shared/models/news.moddel';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: ArticlModel[];

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
    this.newService.Articles.subscribe(res => {
      this.articles = res.filter(article => article.showOnHomepage).sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });
    });
  }

}
