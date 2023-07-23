import { Component, Input } from '@angular/core';
import { Button } from 'src/app/enum/Button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type!: Button;
  buttonType = Button;
}
