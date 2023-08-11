import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid'


@Injectable({providedIn: 'root'})
export class dbzService {
    constructor() { }

    public characters : Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 120
        },
        {
            id: uuid(),
            name:'Goku',
            power: 500
        },
        {
            id: uuid(),
            name:'Veggeta',
            power: 700
        },
        {
            id: uuid(),
            name:'Picollo',
            power:400
        },
        {
            id: uuid(),
            name: 'Trunks',
            power: 450
        }
    ]

    onNewCharacter(character: Character):void{
        // this.characters.push({name: character.name, power:character.power})
        const newCharacter :Character = {id:uuid(),...character}
        this.characters.push(newCharacter)
    }

    // onDeleteCharacter(index : number):void{
    //     this.characters.splice(index,1);
    // }
    onDeleteCharacter(id : string):void{
        this.characters = this.characters.filter(character => character.id != id);
    }
    
}