import { Component } from '@angular/core';
import { CarInfo } from 'src/app/types/CarInfo';

@Component({
  selector: 'app-credit-modal',
  templateUrl: './credit-modal.component.html',
  styleUrls: ['./credit-modal.component.scss'],
})
export class CreditModalComponent {
  carInfo!: CarInfo;
}
