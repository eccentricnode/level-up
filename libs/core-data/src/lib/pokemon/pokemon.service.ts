import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pokemon } from './pokemon.model';
import { Observable } from 'rxjs';
import { PokemonMeta } from './pokemon-meta.model';

const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res: {results: Pokemon[]}) => res.results));
  }

  getUrlWithId(pokemonUrl): Observable<PokemonMeta> {
    return this.http.get<PokemonMeta>(pokemonUrl);
  }
}
