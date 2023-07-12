import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Flaz'];
  // ? evita que undefine se asigne a la variabel
  public deletedHero?: string = '';

  revomeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    console.log({ this: this.deletedHero });
  }
}
