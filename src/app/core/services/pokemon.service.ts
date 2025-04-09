import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly API_URL = 'https://pokeapi-backend-8uiq.onrender.com/pokemon'; 

  constructor(private http: HttpClient) {}

  getPokemonById(idOrName: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.API_URL}/${idOrName}`);
  }
}
