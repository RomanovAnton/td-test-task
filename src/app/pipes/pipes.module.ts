import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostPipe } from './cost.pipe';
import { MonthToYearPipe } from './month-to-year.pipe';
import { MonthsFormPipe } from './months-form.pipe';

@NgModule({
  declarations: [CostPipe, MonthToYearPipe, MonthsFormPipe],
  imports: [CommonModule],
  exports: [CostPipe, MonthToYearPipe, MonthsFormPipe],
})
export class PipesModule {}
