import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  standalone:  true,
  imports: [GamesComponent],// Importa GamesComponent para usarlo dentro de UserComponent
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Marco';  // Nombre del usuario
  isLoggedIn = false;  // Estado de sesión
  favGame = "";        // Juego favorito
getFavorite(gameName: string){
  this.favGame = gameName;// Guarda el juego favorito cuando se selecciona
}

greet() {
  alert('Hello, ' + this.username) // Muestra un saludo con el nombre del usuario
}
}
