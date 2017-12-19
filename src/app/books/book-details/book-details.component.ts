import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from './../books.service';
import { Book } from './../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private booksService: BooksService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadBook();

  }
  loadBook() {
    this.book = this.route.snapshot.data['book'];
  }
  goToEditBook(book: Book) {
    this.router.navigate(['/editBook', book._id.$oid]);
  }
}
