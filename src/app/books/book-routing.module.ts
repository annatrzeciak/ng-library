import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BookResolve } from './book-resolve.service';


const BOOKS_ROOTS: Route[] = [{ path: 'books/:id', component: BookDetailsComponent , resolve: { book: BookResolve } }}];

@NgModule({
    imports: [RouterModule.forChild(BOOKS_ROOTS)],
    exports: [RouterModule]
})
export class BookRoutingModule { }