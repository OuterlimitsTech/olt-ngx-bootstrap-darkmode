import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    ThemeSwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ThemeSwitchComponent
  ]
})
export class NgxBootstrapDarkmodeModule { }
