import { Component, OnInit } from '@angular/core';
import { Link } from '../../link/link.model';

@Component({
  selector: 'app-desplegable',
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.css']
})
export class DesplegableComponent implements OnInit {

  links: Link[];

  constructor() {
    this.links = [
      new Link ('Node', 'https://nodejs.org/es/', 100),
      new Link ('Angular', 'https://angular.io/', 100),
      new Link ('Bootstrap', 'https://getbootstrap.com/', 100),
      new Link ('Google', 'https://google.com/', 100)
    ];
  }

  ngOnInit() {}

  agregar(titulo: HTMLInputElement, link: HTMLInputElement) {
    if ( titulo.value !== '' || link.value !== '') {
      console.log(titulo.value + ' ' + link.value);
      this.links.push(new Link(titulo.value, link.value));
      titulo.value = '';
      link.value = '';
      return false; // esto evita refrescar la pagina;

    }
  }
}
