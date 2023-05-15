import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent {
  public titre: string = 'Ajout nouveau Article';
  imgPlus: string =
    'https://img.freepik.com/icones-gratuites/bouton-ajouter_318-757580.jpg';
  formation: string = 'Angular';

  constructor(private service: ArticleService, private router: Router) {}
  persistArticle(data: any) {
    this.service
      .createArticle(data)
      .subscribe((data) => this.router.navigate(['/listArticle']));
  }
}
