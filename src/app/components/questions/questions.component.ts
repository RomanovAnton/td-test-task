import { Component } from '@angular/core';
import { Button } from 'src/app/enum/Button';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  buttonType = Button;
}
