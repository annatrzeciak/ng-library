import { BooksService } from './../books.service';
import { Book } from './../models/book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }
  goToBookDetails(book: Book) {

    this.router.navigate(['/books', book._id.$oid]);

  }
}
