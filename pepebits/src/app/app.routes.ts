import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CollectionComponent } from './pages/collection/collection';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'collection', component: CollectionComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
