import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { FormComponent } from './form/form.component';
import { ExhibitionComponent } from './pages/exhibition/exhibition.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exhibition', component: ExhibitionComponent },
  { path: 'music', component: MusicComponent },
  { path: 'login', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
