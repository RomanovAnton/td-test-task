import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthToYear',
})
export class MonthToYearPipe implements PipeTransform {
  transform(months: number) {
    if (isNaN(months)) {
      return;
    }

    const yearsCount = Math.floor(months / 12);
    const valueWord = this.getWordForNumber(yearsCount, ['год', 'года', 'лет']);

    return yearsCount + ' ' + valueWord;
  }

  private getWordForNumber(number: number, words: string[]): string {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[Math.min(number % 10, 5)]
    ];
  }
}
