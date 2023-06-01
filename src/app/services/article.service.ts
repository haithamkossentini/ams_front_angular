import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  urlArticles = 'http://localhost:8090/articles/';
  basicToken:any = sessionStorage.getItem('basicToken');
  article: any;
  articleData: any ; 
  constructor(private Http: HttpClient) {}
  listArticles() {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    return this.Http.get(this.urlArticles , { headers });
  }
  deleteArticle(idArticle: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });

    return this.Http.delete(this.urlArticles + idArticle, { headers });
  }
  createArticle(article: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });

    this.articleData = {
      'label': article.label,
      'price': article.price,
      'picture': article.picture
    }
    return this.Http.post(this.urlArticles+article.providerId, this.articleData, { headers });
  }

  updateArticle(article: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    console.log(article);
        return this.Http.put(this.urlArticles+article.provider.id+'/'+article['id'], article, { headers });
  }

  getArticle(id: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });

    return this.Http.get(this.urlArticles + id, { headers });
  }
}
