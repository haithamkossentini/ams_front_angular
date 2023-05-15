import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-navbar' },
  { path: 'listProvider', component: ListProviderComponent },
  { path: 'listArticle', component: ListArticleComponent },
  { path: 'addProvider', component: AddProviderComponent },
  { path: 'addArticle', component: AddArticleComponent },
  { path: 'updateProvider/:id', component: UpdateProviderComponent },
  { path: 'updateArticle/:id', component: UpdateArticleComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
