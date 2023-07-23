import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cost',
})
export class CostPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (!value && value !== 0) {
      return;
    }

    let numStr = value.toString().split('');
    numStr = numStr.reverse();
    for (let i = 3; i < numStr.length; i += 4) {
      numStr.splice(i, 0, ' ');
    }
    return numStr.reverse().join('') + ' ₽';
  }
}
