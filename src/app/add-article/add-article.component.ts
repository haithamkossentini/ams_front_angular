import { ProviderService } from './../services/provider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent implements OnInit{
  public titre: string = 'Ajout nouveau Article';
  imgPlus: string =
    'https://img.freepik.com/icones-gratuites/bouton-ajouter_318-757580.jpg';
  formation: string = 'Angular';
  providers: any;

  constructor(private service: ArticleService,private providerService: ProviderService, private router: Router) {}
  ngOnInit() {
    this.providerService.listProviders().subscribe(
      data => { this.providers = data}
    );
  }
  persistArticle(data: any) {
    this.service
      .createArticle(data)
      .subscribe((data) => this.router.navigate(['/listArticle']));
  }
}
