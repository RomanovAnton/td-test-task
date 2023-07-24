import { Component, Input } from '@angular/core';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Button } from 'src/app/enum/Button';

@Component({
  selector: 'app-credit-program',
  templateUrl: './credit-program.component.html',
  styleUrls: ['./credit-program.component.scss'],
})
export class CreditProgramComponent {
  @Input() percent!: number;
  @Input() payment!: number;
  @Input() months!: number;

  buttonType = Button;

  currentProgram = {
    percent: this.percent,
    payment: this.payment,
  };

  constructor(private modal: NgbModal, private activeModal: NgbActiveModal) {}

  ngOnChanges(): void {
    if (this.percent >= 20 && this.payment <= 10000) {
      this.currentProgram.percent = 12.3;
      this.currentProgram.payment = 9800;
    } else {
      this.currentProgram.percent = 13.6;
      this.currentProgram.payment = 10500;
    }
  }

  handleSubmit(): void {
    this.activeModal.dismiss();
    this.modal.open(SuccessModalComponent, { size: 'm' });
  }
}
