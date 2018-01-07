import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { JoinPipePipe } from './join-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,LoadingSpinnerComponent, JoinPipePipe],
  declarations: [HeaderComponent, LoadingSpinnerComponent, JoinPipePipe]
})
export class SharedModuleModule { }
