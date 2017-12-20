import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { ReadersListComponent } from './readers-list/readers-list.component';
import { ReaderDetailsComponent } from './reader-details/reader-details.component';
import { ReaderResolve } from './reader-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [ReaderResolve],
  exports: [ReadersListComponent],
  declarations: [AddReaderComponent, ReadersListComponent, ReaderDetailsComponent]
})
export class ReadersModule { }
