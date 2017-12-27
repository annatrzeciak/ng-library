import { ReturnBookComponent } from './../borrow-book/return-book/return-book.component';
import { BorrowBookComponent } from './../borrow-book/borrow-book/borrow-book.component';
import { BookResolve } from './../books/book-resolve.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from './../shared-module/shared-module.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule,
    ReactiveFormsModule],
  providers: [BookResolve],
  declarations: [BorrowBookComponent, ReturnBookComponent ]
})
export class BorrowBookModule { }
