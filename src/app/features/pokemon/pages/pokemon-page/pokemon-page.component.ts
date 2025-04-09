import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonSearchComponent } from '../../components/pokemon-search/pokemon-search.component';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [
    CommonModule,
    PokemonSearchComponent,
    PokemonCardComponent,
    NavigationComponent,
  ],
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent {
  pokemonData?: Pokemon;
  error: string = '';
  isLoading = false;

  constructor(private pokemonService: PokemonService) {}

  handleSearch(value: string) {
    this.pokemonData = undefined;
    this.error = '';
    this.isLoading = true;
  
    this.pokemonService.getPokemonById(value).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'No se encontró el Pokémon 😢';
        this.isLoading = false;
      }
    });
  }
  

  handleNavigation(id: number) {
    this.handleSearch(id.toString());
  }
}

