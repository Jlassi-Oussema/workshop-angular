import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListSuggestionComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workshop1';
}
