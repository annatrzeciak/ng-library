import { BooksListComponent } from './books/books-list/books-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const APP_ROOTS: Route[] = [{ path: '', pathMatch: 'full', redirectTo: 'books' },
    { path: 'books', component: BooksListComponent }];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROOTS)],
    exports: [RouterModule]
})
export class AppRoutingModule { }