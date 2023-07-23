import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [SliderComponent, ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [SliderComponent, ButtonComponent],
})
export class WidgetsModule {}
