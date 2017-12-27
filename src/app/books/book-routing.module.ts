import { ReturnBookComponent } from './../borrow-book/return-book/return-book.component';
import { BorrowBookComponent } from './../borrow-book/borrow-book/borrow-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BookResolve } from './book-resolve.service';
import { EditBookComponent } from './edit-book/edit-book.component';


const BOOKS_ROOTS: Route[] = [
    { path: 'books/:id', component: BookDetailsComponent, resolve: { book: BookResolve } },
    { path: 'editBook/:id', component: EditBookComponent, resolve: { book: BookResolve } },
    { path: 'borrowBook/:id', component: BorrowBookComponent, resolve: { book: BookResolve } },
    { path: 'returnBook/:id', component: ReturnBookComponent, resolve: { book: BookResolve } }
];

@NgModule({
    imports: [RouterModule.forChild(BOOKS_ROOTS)],
    exports: [RouterModule]
})
export class BookRoutingModule { }