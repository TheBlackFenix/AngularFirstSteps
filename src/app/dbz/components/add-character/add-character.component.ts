import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

  @Output()
  onNewCharacter : EventEmitter<Character> =  new EventEmitter();

  public character : Character =
  {
    name : '',
    power : 0
  }
  addCharacter():void{
    
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)
    this.reset()
  }

  reset():void
  {
    this.character = {name : '', power : 0}
  }
}
