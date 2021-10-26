import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'pokemon-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private dataService: DataService) {
    this.pokemon$ = this.dataService.getPokemon();

  }

  pokemon$: Observable<IPokemon>

  ngOnInit() {
  }
}
