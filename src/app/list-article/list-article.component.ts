import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-provider',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css'],
})
export class ListArticleComponent implements OnInit {
  articles: any;
  idProvider: any;
  constructor(private service: ArticleService, private router: Router) {}
  ngOnInit() {
    this.service.listArticles().subscribe((response) => {
      this.articles = response;
    });
  }

  deleteArticle(id: any) {
   // console.log(id);
    this.service.deleteArticle(id).subscribe((response) => {
      console.log(response);
      this.refreshListArticles();
    });
  }
  refreshListArticles() {
    this.service.listArticles().subscribe((response) => {
      this.articles = response;
    });
  }
  updateArticle(id: any) {
    this.router.navigate(['updateArticle' + '/'+id ]);
  }
}
