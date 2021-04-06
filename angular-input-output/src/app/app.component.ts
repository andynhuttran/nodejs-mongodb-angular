import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    Hello Angular, {{title}}

    <div>
      <counter [startWith]="5" 
        (changeCounterEvent)="handleCounterChanged($event, 'First Counter')"  
        (resetEvent)="handleReset($event)"      
        >      
      </counter>

      <counter [startWith]="10" 
        (changeCounterEvent)="handleCounterChanged($event, 'Second Counter')"
        (resetEvent)="handleReset($event)"
        >
      </counter>

      <counter
        (changeCounterEvent)="handleCounterChanged($event, 'Last Counter')"
        (resetEvent)="handleReset($event)"
        >
      </counter>
    </div>

    <div>
      {{status}}
    </div>
  `
  

})

export class AppComponent {
  title = 'This is my first Angular app';

  status : string = "";

  handleCounterChanged(value: number, msg: string){
    this.status = `${msg} is ${value}`;
  }

  handleReset(msg: string){
    this.status = msg;
  }
}
