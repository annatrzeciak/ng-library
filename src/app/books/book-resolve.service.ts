import { BooksService } from './books.service';
import { Book } from './models/book';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class BookResolve implements Resolve<Book> {
    constructor(private booksService: BooksService) {
    }
    resolve(route: ActivatedRouteSnapshot) {
        return this.booksService.getBook(route.params['id']);
    }
}