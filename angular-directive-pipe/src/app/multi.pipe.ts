import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: string, times: number): string {
    let msg = "";
    for (let i = 0; i < times; ++i){
      msg += value + " ";
    }
    console.log(`${value} | ${times}`);
    
    return msg;
  }

}
