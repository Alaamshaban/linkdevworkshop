import { Component, Input, OnInit } from '@angular/core';
import { ArticlModel } from '../models/news.moddel';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() articles: ArticlModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
