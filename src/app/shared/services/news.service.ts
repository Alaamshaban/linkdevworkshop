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

  getArticle(id: number): Observable<ArticlModel> {
    return of(this.ArticlesList).pipe(map(
      (result: ArticlModel[]) => result.find(article => article.id === id)
    ));
  }

  searchArticles(filter): Observable<ArticlModel[]> {
    if (filter.category && filter.category !== 'none') {
      if (filter.text) {
        return of(this.ArticlesList).pipe(map(
          (result: ArticlModel[]) => result.filter(article => (article.sourceID === filter.category &&
            this.isTextMatched(article.title, filter.tex)))
        ));
      } else {
        return of(this.ArticlesList).pipe(map(
          (result: ArticlModel[]) => result.filter(article => (article.sourceID === filter.category))
        ));
      }
    } else {
      return of(this.ArticlesList).pipe(map(
        (result: ArticlModel[]) => result.filter(article => (this.isTextMatched(article.title, filter.text)))
      ));
    }
  }

  isTextMatched(word: string, subString: string): boolean {
    if (word) {
      if (word.search(subString.toLocaleLowerCase()) === -1) {
        return false;
      }
      return true;
  }
}
}
