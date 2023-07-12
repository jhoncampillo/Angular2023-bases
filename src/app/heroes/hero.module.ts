import { NgModule } from '@angular/core';
//pilas al crear modulos independientes
//si manejat ngif hay que importar este  Commond
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule],

  exports: [HeroComponent, ListComponent],
  //Lo exporto
})
export class HeroModule {}
