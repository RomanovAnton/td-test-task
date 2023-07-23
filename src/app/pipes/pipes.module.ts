import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostPipe } from './cost.pipe';

@NgModule({
  declarations: [CostPipe],
  imports: [CommonModule],

  exports: [CostPipe],
})
export class PipesModule {}
