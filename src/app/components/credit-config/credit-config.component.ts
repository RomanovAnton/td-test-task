import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Button } from 'src/app/enum/Button';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-credit-config',
  templateUrl: './credit-config.component.html',
  styleUrls: ['./credit-config.component.scss'],
})
export class CreditConfigComponent {
  @Input() cost!: number;

  buttonType = Button;

  percentCurrent = 20;
  percentMin = 10;
  percentMax = 50;
  percentStep = 5;

  paymentCurrent = 21000;
  paymentMin = 18000;
  paymentMax = 22000;
  paymentStep = 1000;

  monthsCurrent = 24;
  monthsMin = 12;
  monthsMax = 60;
  monthsStep = 12;

  constructor(private modal: NgbModal, private activeModal: NgbActiveModal) {}

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

  handleSubmit(): void {
    this.activeModal.dismiss();
    this.modal.open(SuccessModalComponent, { size: 'm' });
  }
}
