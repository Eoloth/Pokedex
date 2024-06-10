import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-foto-pokemon',
  standalone: true,
  imports: [CommonModule],  // Añade CommonModule a los imports
  templateUrl: './foto-pokemon.component.html',
  styleUrls: ['./foto-pokemon.component.scss']
})
export class FotoPokemonComponent {
  @Input() pokemon?: Pokemon;
}
