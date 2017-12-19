import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BooksListComponent],
  declarations: [BooksListComponent]
})
export class BooksModule { }
