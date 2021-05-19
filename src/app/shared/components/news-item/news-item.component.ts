import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlModel } from '../../models/news.moddel';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

  @Input() article: ArticlModel;
  @Input() detailed: boolean;

  constructor(private router: Router) { }

  readMore(articleId: number): void {
    this.router.navigate(['/details', articleId]);
  }

}
