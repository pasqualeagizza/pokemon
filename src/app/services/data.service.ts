import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../models/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<IPokemon>{
    const numeroRandom = Math.floor((Math.random() * 898) + 1);
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`);;
  }

}