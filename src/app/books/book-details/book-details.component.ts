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
  showSpinner: boolean = true;

  constructor(private booksService: BooksService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadBook();

  }
  loadBook() {
    this.showSpinner=true;
    this.book = this.route.snapshot.data['book'];
    this.showSpinner=false;
  }
  goToEditBook(book: Book) {
    this.router.navigate(['/editBook', book._id.$oid]);
  }
  goToBookDetails(idReader){
    this.router.navigate(['/readers', idReader]);
  }
}
