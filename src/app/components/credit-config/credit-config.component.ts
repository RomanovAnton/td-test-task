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

  constructor(private modal: NgbModal, private activeModal: NgbActiveModal) {}

  handleSubmit(): void {
    this.activeModal.dismiss();
    this.modal.open(SuccessModalComponent, { size: 'm' });
  }
}
