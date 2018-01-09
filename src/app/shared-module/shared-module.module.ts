import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { JoinPipePipe } from './join-pipe.pipe';
import { FilterBookPipe } from './filterBook.pipe';
import { FormsModule } from '@angular/forms';
import { FilterReadersPipe } from './filter-readers.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[HeaderComponent,LoadingSpinnerComponent, JoinPipePipe, FilterBookPipe, FilterReadersPipe],
  declarations: [HeaderComponent, LoadingSpinnerComponent, JoinPipePipe, FilterBookPipe, FilterReadersPipe]
})
export class SharedModuleModule { }
