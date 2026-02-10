import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

export const routes: Routes = [
  // route par défaut
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // pages principales
  { path: 'home', component: HomeComponent },
  { path: 'listSuggestion', component: ListSuggestionComponent },

  // page 404
  { path: '**', component: NotfoundComponent }
];
