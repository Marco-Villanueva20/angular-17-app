import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://picsum.photos/200/300">
    <p>Lorem ipsum dolor sit amet consectetur, 
      adipisicing elit. Ipsa temporibus aut minus, alias illo nemo dolorum? Rem, 
      quibusdam dolor et illum iure quod. Laborum unde natus accusantium consectetur aliquid qui?</p>
  `,
  styles: `
  img{
    width: 50%;
    height: auto;
  }
  `
})
export class CommentsComponent {

}
