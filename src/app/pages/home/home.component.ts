import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  pagina: number = 1; // Inicia la página en 1

  constructor(private pokemonService: PokemonService) { }

  @ViewChild('tarjetas') tarjetasElement!: ElementRef;

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista() {
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getByPage(this.pagina)];
    console.log(this.listaPokemon);
    this.pagina++;
  }

  onScroll(e: any) {
    console.log(e);
    if (
      Math.round(
        this.tarjetasElement.nativeElement.scrollHeight + this.tarjetasElement.nativeElement.scrollTop
      ) === e.srcElement.clientHeight) {
      this.cargarLista();
    }
  }
}
