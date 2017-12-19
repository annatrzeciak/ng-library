import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BookResolve } from './book-resolve.service';
import { EditBookComponent } from './edit-book/edit-book.component';


const BOOKS_ROOTS: Route[] = [
    { path: 'books/:id', component: BookDetailsComponent, resolve: { book: BookResolve } },
    { path: 'editBook/:id', component: EditBookComponent, resolve: { book: BookResolve } }
    { path: 'addBook', component: AddBookComponent }
];

@NgModule({
    imports: [RouterModule.forChild(BOOKS_ROOTS)],
    exports: [RouterModule]
})
export class BookRoutingModule { }