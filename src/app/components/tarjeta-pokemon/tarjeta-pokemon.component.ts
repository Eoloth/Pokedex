import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Resultado } from '../../interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss'],
  imports: [CommonModule, TitleCasePipe]
})
export class TarjetaPokemonComponent implements OnChanges {

  @Input() data?: Resultado;
  @Input() seleccionado: boolean = false;
  @Output() clickeado = new EventEmitter<string>();
  id: string = "0";

  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.extraerInformacion();
  }

  extraerInformacion() {
    if (this.data && this.data.url) {
      this.id = this.data.url.split("/")[6];
    }
  }
}
