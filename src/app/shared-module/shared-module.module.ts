import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,LoadingSpinnerComponent],
  declarations: [HeaderComponent, LoadingSpinnerComponent]
})
export class SharedModuleModule { }
