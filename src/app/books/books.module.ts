import { SharedModuleModule } from './../shared-module/shared-module.module';
import { BookResolve } from './book-resolve.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule
  ],
  exports: [BooksListComponent],
  providers: [BookResolve],
  declarations: [BooksListComponent, BookDetailsComponent]
})
export class BooksModule { }
