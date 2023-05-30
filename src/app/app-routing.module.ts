import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-navbar' },
  { path: 'listProvider', component: ListProviderComponent , canActivate: [AuthGaurdService]},
  { path: 'listArticle', component: ListArticleComponent, canActivate: [AuthGaurdService] },
  { path: 'addProvider', component: AddProviderComponent, canActivate: [AuthGaurdService] },
  { path: 'addArticle', component: AddArticleComponent, canActivate: [AuthGaurdService] },
  { path: 'updateProvider/:id', component: UpdateProviderComponent, canActivate: [AuthGaurdService] },
  { path: 'updateArticle/:id', component: UpdateArticleComponent, canActivate: [AuthGaurdService] },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
