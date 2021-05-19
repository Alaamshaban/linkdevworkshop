import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticlModel, SourceCategoryModel } from '../models/news.moddel';
import { map } from 'rxjs/operators';
import * as data from '../../newsapi.json';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  ArticlesList: ArticlModel[] = (data as any).default.articles;

  SourceCategoriesList: SourceCategoryModel[] = (data as any).default.sourceCategory;

  constructor() { }

  get Articles(): Observable<ArticlModel[]> {
    return of(this.ArticlesList).pipe(map(
      (result: ArticlModel[]) => result.sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      })
    ));
  }

  get Sources(): Observable<SourceCategoryModel[]> {
    return of(this.SourceCategoriesList);
  }
}
