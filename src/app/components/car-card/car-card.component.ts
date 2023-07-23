import { Component, Input } from '@angular/core';
import { CarInfo } from 'src/app/types/CarInfo';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
  @Input() carInfo!: CarInfo;
}
