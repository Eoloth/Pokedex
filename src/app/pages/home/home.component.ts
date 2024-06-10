import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FotoPokemonComponent } from './../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Resultado } from '../../interfaces/pokeapi'; 
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent, CommonModule, TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cargando: boolean = true;
  listaPokemon: Resultado[] = [];
  pagina: number = 1; // Inicia la página en 1
  pokemonSeleccionado?: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  @ViewChild('tarjetas') tarjetasElement!: ElementRef;

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista() {
    this.cargando = true; // Indicar que se está cargando
    const nuevosPokemons = await this.pokemonService.getByPage(this.pagina);
    this.listaPokemon = [...this.listaPokemon, ...nuevosPokemons];
    console.log(this.listaPokemon);
    this.pagina++;
    this.cargando = false; // Terminar la carga
  }

  onScroll(e: any) {
    console.log(e);
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // Se alcanzó el final del scroll, cargar más
      if (!this.cargando) { // Evitar cargar múltiples veces simultáneamente
        this.cargarLista();
      }
    }
  }

  async tarjetaClickeada(id: string) {
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
    console.log(this.pokemonSeleccionado); // Para verificar que se selecciona el Pokémon correctamente
  }
}
