import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {
  searchValue: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.searchValue.trim()) {
      this.search.emit(this.searchValue.trim());
    }
  }
}
