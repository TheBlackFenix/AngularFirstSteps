import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h3>Contador : {{counter}}</h3>
                <button (click)="Modify(+1)">+1</button>
                <button (click)="Modify(-1)">-1</button>
                <button (click)="Reset()">Reset</button>`
})

export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    public Modify(value:number):void
    {
        this.counter += value;
    }

    public Reset():void
    {
        this.counter = 10;
    }

}