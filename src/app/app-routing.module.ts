import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { FormComponent } from './form/form.component';
import { ExhibitionComponent } from './pages/exhibition/exhibition.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'exhibition', component: ExhibitionComponent },
  // { path: 'music', component: MusicComponent },
  // { path: 'login', component: FormComponent },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'exhibition',
    loadChildren: () =>
      import('./pages/exhibition/exhibition.module').then(
        (m) => m.ExhibitionModule
      ),
  },
  {
    path: 'music',
    loadChildren: () =>
      import('./pages/music/music.module').then((m) => m.MusicModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
