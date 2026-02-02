import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Suggestion } from '../../models/suggestion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-suggestion',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {
    searchText: string = '';

   suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Amélioration de la gestion des réservations.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Programme de récompenses pour les employés.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l’interface utilisateur',
      description: 'Refonte complète de l’UI.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  favorites: Suggestion[] = [];
   like(s: Suggestion) {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion) {
    this.favorites.push(s);
  }

}

