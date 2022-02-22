import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenOdd'
})
export class EvenOddPipe implements PipeTransform {

  transform(value: any[],rank: string): any {
    if( rank===undefined || (rank !=='even' && rank !=='odd') ){
      return null;
    }
    if(rank === 'even'){
      return value.filter( (item,index) => index%2==0  );
    }
    if(rank==='odd'){
      return value.filter( (item,index) => index%2==1 );
    }
  }

}
