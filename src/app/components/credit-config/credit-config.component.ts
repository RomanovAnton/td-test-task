import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-config',
  templateUrl: './credit-config.component.html',
  styleUrls: ['./credit-config.component.scss'],
})
export class CreditConfigComponent {
  @Input() cost!: number;

  percentCurrent = 20;
  percentMin = 10;
  percentMax = 50;
  percentStep = 5;

  paymentCurrent = 10000;
  paymentMin = 10000;
  paymentMax = 30000;
  paymentStep = 1000;

  monthsCurrent = 252;
  monthsMin = 12;
  monthsMax = 252;
  monthsStep = 12;

  updatePercent(value: number) {
    this.percentCurrent = value;
  }

  updatePayment(value: number) {
    if (value == this.paymentCurrent) {
      return;
    }

    const changedPart = (this.paymentCurrent - value) / this.paymentStep;
    this.monthsCurrent = this.monthsCurrent + changedPart * this.monthsStep;
    this.paymentCurrent = value;
  }

  updateMonths(value: number) {
    if (value == this.monthsCurrent) {
      return;
    }

    const changedPart = (this.monthsCurrent - value) / this.monthsStep;
    this.paymentCurrent = this.paymentCurrent + changedPart * this.paymentStep;
    this.monthsCurrent = value;
  }
}
