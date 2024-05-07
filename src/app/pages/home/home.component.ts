import { Component } from '@angular/core';
import { FotoPokemonComponent } from './../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './../../components/tarjeta-pokemon/tarjeta-pokemon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
