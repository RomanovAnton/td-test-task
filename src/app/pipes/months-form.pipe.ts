import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthsForm',
})
export class MonthsFormPipe implements PipeTransform {
  transform(months: number): string {
    if (months === 1) {
      return `${months} месяц`;
    } else if (months % 10 === 1 && months % 100 !== 11) {
      return `${months} месяц`;
    } else if (
      months % 10 >= 2 &&
      months % 10 <= 4 &&
      (months % 100 < 10 || months % 100 >= 20)
    ) {
      return `${months} месяца`;
    } else {
      return `${months} месяцев`;
    }
  }
}
