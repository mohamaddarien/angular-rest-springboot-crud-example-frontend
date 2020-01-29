import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './module/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '',loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
