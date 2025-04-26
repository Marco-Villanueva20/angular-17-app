import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
  <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (item of games; track item.id) {
        <li (click)="fav(item.name)" >{{item.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = "";// Recibe el nombre de usuario desde UserComponent
  @Output() addFavoriteEvent = new EventEmitter<string>();// Emite el juego seleccionado

  fav(gameName: string) {
    alert(`A ${this.username} le gusta ${gameName}`);
    this.addFavoriteEvent.emit(gameName) // Envía el nombre del juego al componente padre (UserComponent)
  }

games = [
  { id: 1, name: "Wolf Team" },
  { id: 2, name: "Mario Bros" },
  { id: 3, name: "COD" }
]
}
