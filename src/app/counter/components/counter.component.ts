import { Component } from '@angular/core';
//import { AppComponent } from '../app.component';

//Tengo que declarar el componente en el Modulo
@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter => {{ counter }}</h2>
    <button (click)="increaseBy(5)">+5</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrementBy(5)">-5</button>
  `,
})
export class CounterComponent {
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
//snipped a-component
