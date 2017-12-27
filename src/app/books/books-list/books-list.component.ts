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
  deleteThisBook: Book;
  showSpinner: boolean = true;

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.showSpinner = true;
    this.booksService.getBooks().subscribe((books) => {
      this.books = books.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1);
      this.showSpinner = false;
    });

  }
  goToBookDetails(book: Book) {
    this.showSpinner=true;
    this.router.navigate(['/books', book._id.$oid]);

  }
  showDeleteModalWindow(book: Book) {
    this.deleteThisBook = book;
    $('#deleteBook').modal('show');
  }
  deleteBook() {
    this.showSpinner = true;
    this.booksService.removeBook(this.deleteThisBook._id.$oid).subscribe((books) => {
      this.deleteThisBook = null;
      this.loadBooks();
    });


  }
  goToBorrowBook(book: Book) {
    this.router.navigate(['/borrowBook', book._id.$oid]);

  }
  goToReturnBook(book: Book) {
    this.router.navigate(['/returnBook', book._id.$oid]);

  }
}
