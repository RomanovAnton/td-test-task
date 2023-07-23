import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarInfo } from './types/CarInfo';
import { CreditModalComponent } from './components/credit-modal/credit-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public modal: NgbModal) {}

  list = [
    {
      image: '/assets/bmw.png',
      title: 'BMW 5',
      cost: 5500000,
    },
    {
      image: '/assets/audi.png',
      title: 'Audi r8',
      cost: 3300000,
    },
    {
      image: '/assets/nissan.png',
      title: 'Nissan gt-r',
      cost: 2800000,
    },
  ];

  handleCardClick(item: CarInfo): void {
    const modalRef = this.modal.open(CreditModalComponent, {
      size: 'xl',
    });
    modalRef.componentInstance.carInfo = item;
  }
}
