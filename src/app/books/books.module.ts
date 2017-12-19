import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BooksListComponent],
  declarations: [BooksListComponent, BookDetailsComponent]
})
export class BooksModule { }
