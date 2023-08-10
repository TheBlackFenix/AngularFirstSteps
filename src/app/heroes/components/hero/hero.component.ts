import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'spiderman'
  public age: number = 25

  get capitalizedName():string
  {
    return this.name.toUpperCase()
  }

  getHeroDescription():string
  {
    return `Nombre: ${this.capitalizedName} / Edad: ${this.age}`
  }

  changeHero():void
  {
    this.name = 'ironman'
  }
  changeAge():void
  {
    this.age = 45
  }
  resetForm():void
  {
    this.name = 'spiderman'
    this.age = 25
  }
}
