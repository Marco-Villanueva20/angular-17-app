import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component";

@Component({
  selector: 'app-root',
  standalone:  true,
  imports: [UserComponent, CommentsComponent],// Importa UserComponent para usarlo dentro de AppComponent
  templateUrl: './app.component.html',//lo que renderiza
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Barcelona';
}
