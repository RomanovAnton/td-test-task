import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() minValue!: number;
  @Input() maxValue!: number;
  @Input() stepValue!: number;
  @Input() value!: number;

  @Output() valueChange = new EventEmitter<number>();

  onRangeChange(value: number) {
    this.valueChange.emit(value);
  }
}
