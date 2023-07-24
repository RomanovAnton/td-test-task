import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditModalComponent } from './credit-modal/credit-modal.component';
import { CreditConfigComponent } from './credit-config/credit-config.component';
import { QuestionsComponent } from './questions/questions.component';
import { CarCardComponent } from './car-card/car-card.component';
import { PipesModule } from '../pipes/pipes.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { CreditProgramComponent } from './credit-program/credit-program.component';

@NgModule({
  declarations: [
    CreditModalComponent,
    CreditConfigComponent,
    QuestionsComponent,
    CarCardComponent,
    SuccessModalComponent,
    CreditProgramComponent,
  ],
  imports: [CommonModule, PipesModule, WidgetsModule],
})
export class ComponentsModule {}
