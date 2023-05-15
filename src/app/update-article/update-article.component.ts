import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css'],
})
export class UpdateArticleComponent implements OnInit {
  id: any;
  label: any;
  price: any;
  picture: any;
  constructor(
    private service: ArticleService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.service.getArticle(this.id).subscribe((article: any) => {
      this.label = article.label;
      this.price = article.price;
      this.picture = article.picture;
      console.log(article);
    });
  }
  updateArticle() {
    let article = {
      id: this.id,
      label: this.label,
      price: this.price,
      picture: this.picture,
    };
    this.service
      .updateArticle(article)
      .subscribe((data) => this.router.navigate(['listArticle']));
  }
}
