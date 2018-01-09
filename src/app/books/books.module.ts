import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModuleModule } from './../shared-module/shared-module.module';
import { BookResolve } from './book-resolve.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule ],
  exports: [BooksListComponent],
  providers: [BookResolve],
  declarations: [BooksListComponent, BookDetailsComponent, EditBookComponent, AddBookComponent]
})
export class BooksModule { }
