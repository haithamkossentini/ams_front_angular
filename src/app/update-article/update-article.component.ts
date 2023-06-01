import { ProviderService } from './../services/provider.service';
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
  provider: any;
  providers: any;

  constructor(
    private service: ArticleService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private providerService: ProviderService
  ) {}
  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.provider = params.get('provider');

    });
    this.service.getArticle(this.id).subscribe((article: any) => {
      this.label = article.label;
      this.price = article.price;
      this.picture = article.picture;
      this.provider = article.provider;

    });
    this.providerService.listProviders().subscribe(
      data => { this.providers = data}
    );
  }
  updateArticle() {
    let article = {
      id: this.id,
      label: this.label,
      price: this.price,
      picture: this.picture,
      provider: this.provider
    };
    this.service
      .updateArticle(article)
      .subscribe((data) => this.router.navigate(['listArticle']));
  }
}
