import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinPipe'
})
export class JoinPipePipe implements PipeTransform {

  transform (array: Array<any>, character: string = ', \n'): any {
    
    if (array.length<=0){
      return array;
    }
  
    return array.join(character);
  }

}
