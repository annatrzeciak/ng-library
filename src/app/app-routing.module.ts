import { ReadersListComponent } from './readers/readers-list/readers-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AddReaderComponent } from './readers/add-reader/add-reader.component';


const APP_ROOTS: Route[] = [{ path: '', pathMatch: 'full', redirectTo: 'books' },
{ path: 'books', component: BooksListComponent },
{ path: 'addBook', component: AddBookComponent },
{ path: 'readers', component: ReadersListComponent },
{ path: 'addReader', component: AddReaderComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROOTS)],
    exports: [RouterModule]
})
export class AppRoutingModule { }