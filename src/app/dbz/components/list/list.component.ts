import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input('ListaDePersonajes')
  public characterList: Character[]=
  [
    {
      name: 'Yayirobe',
      power: 150
  },
  ]

  @Output()
  onDeleteCharacter : EventEmitter<string> = new EventEmitter();

  // deleteCharacter(index:number):void{
  //   this.onDeleteCharacter.emit(index);
  // }
  deleteCharacter(id:string):void{
    this.onDeleteCharacter.emit(id);
  }

}
