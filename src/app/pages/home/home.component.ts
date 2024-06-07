import { Component, OnInit } from '@angular/core';
import { FotoPokemonComponent } from './../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Resultado } from '../../interfaces/pokeapi'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent, CommonModule, TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cargando: boolean = true; // Define la propiedad cargando

  listaPokemon: Resultado[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista() {
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getByPage()];
    this.cargando = false; // Actualiza cargando después de cargar la lista
    console.log(this.listaPokemon);
  }
}
