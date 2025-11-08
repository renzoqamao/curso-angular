import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component(
  {
    templateUrl:'./counter-page.component.html',
    styles : `
      button {
        padding: 5px;
        margin: 5px 10px;
        width : 75px;
      }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush // No quiero usar ZoneJS en este componente.
  })
export class CounterPageComponent{

  counter =10;
  counterSignal = signal(10);

  constructor(){
    setInterval(()=>{this.counter+=1;console.log('tick')}, 2000);
  }

  increaseBy(value : number){
    this.counter += value;
    this.counterSignal.update( current => current + value);
  }

  decreaseBy(value: number){
    this.counter -= value;
    this.counterSignal.update( current => current - value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
