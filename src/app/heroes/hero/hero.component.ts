import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  //Defino los objetos
  public name: string = 'iroman';
  public age: number = 52;

  //Propiedad- getters y setters
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  //Metodo
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  //Metodo
  changehero(): void {
    //throw "Metodo No Implementado"
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 45;
  }

  reset() {
    (this.name = 'iroman'), (this.age = 52);
  }
}
