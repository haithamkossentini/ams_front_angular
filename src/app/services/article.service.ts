import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  urlArticles = 'http://127.0.0.1:8090/articles/';
  article: any;
  constructor(private Http: HttpClient) {}
  listArticles() {
    return this.Http.get(this.urlArticles);
  }
  deleteArticle(idArticle: any) {
    return this.Http.delete(this.urlArticles + idArticle);
  }
  createArticle(article: any) {
    return this.Http.post(this.urlArticles, this.article);
  }

  updateArticle(article: any) {
    return this.Http.put(this.urlArticles + article['id'], article);
  }
  getArticle(id: any) {
    return this.Http.get(this.urlArticles + id);
  }
}
