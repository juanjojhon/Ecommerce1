import { CommonModule } from '@angular/common';
import { Component, Input,  signal,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor(){
    //NO ASYNC
    //before render
    console.log('constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes : SimpleChanges){
    //Before and During render 
    console.log('ng on changes')
    console.log('-'.repeat(10))
    console.log(changes)
    const duration = changes['duration']
    if (duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }


  ngOnInit(){
    //after render
    //una vez
    //async, then, subs
    console.log('ng on init')
    console.log('-'.repeat(10))
    console.log('duration =>', this.duration)
    console.log('message =>', this.message)
    this.counterRef = window.setInterval(() => {
      console.log('Run interval')
      this.counter.update(statePrev => statePrev+1)
    }, 1000)
  }
  ngAfterViewInit(){
    // after render
    // hijos ya renderizados
     console.log('ng AfterView')
     console.log('-'.repeat(10))
  }

  ngOnDestroy(){
    console.log('ng on destroy')
     console.log('-'.repeat(10))
     window.clearInterval(this.counterRef)
  }

  doSomething(){
    console.log('change duration')
    //asyn
  }
}
