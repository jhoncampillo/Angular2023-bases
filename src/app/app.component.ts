import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Mi primera App de Angular';
  public counter: number = 10;
  //contador
  //Metodo
  increaseBy(value: number): void {
    this.counter += value;
  }
  decrementBy(value: number): void {
    this.counter -= value;
  }
  reset(): void {
    this.counter = 10;
  }
}
