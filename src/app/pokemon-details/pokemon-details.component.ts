import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../models/interface';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokemon-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

constructor(private dataService: DataService) {

}
  ngOnInit(): void {
  }

}
