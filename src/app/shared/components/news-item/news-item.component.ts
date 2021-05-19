import { Component, Input, OnInit } from '@angular/core';
import { ArticlModel } from '../../models/news.moddel';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() article: ArticlModel;

  constructor() { }

  ngOnInit(): void {
  }

}
