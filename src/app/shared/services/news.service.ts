import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticlModel, SourceCategoryModel } from '../models/news.moddel';

import * as data from '../../newsapi.json';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  ArticlesList: ArticlModel[] = (data as any).default.articles;

  SourceCategoriesList: SourceCategoryModel[] = (data as any).default.sourceCategory;

  constructor() { }

  get Articles(): Observable<ArticlModel[]> {
    return of(this.ArticlesList);
  }

  get Sources(): Observable<SourceCategoryModel[]> {
    return of(this.SourceCategoriesList);
  }
}
