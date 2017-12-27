
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from './../../books/books.service';
import { Book } from './../../books/models/book';
import { Component, OnInit } from '@angular/core';
import { Reader } from '../../readers/models/reader';
import { ReadersService } from '../../readers/readers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {
  book: Book;
  readers: Reader[] = [];
  borrowBookForm: FormGroup;

  constructor(private booksService: BooksService, private readersService: ReadersService,
    private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loadBook();
    this.loadReaders();
    this.borrowBookForm = this.buildBorrowBookForm();
  }
  loadBook() {

    this.book = this.route.snapshot.data['book'];

  }
  loadReaders() {
    this.readersService.getReaders().subscribe((readers) => {
      this.readers = readers.map((reader) => {
        reader.numberBooks = reader.books.length || 0;
        return reader;
      }).sort((a, b) => a.surname.toUpperCase() > b.surname.toUpperCase() ? 1 : -1);


    });
  }
  buildBorrowBookForm() {

    return this.formBuilder.group({
      title: this.book.title,
      author: this.book.author,
      housePublishing: this.book.housePublishing,
      year: this.book.year,
      ISBN: this.book.ISBN,
      isBorrowed: true,
      idReader: ['', Validators.required]
    });
  }
  borrowThisBook() {

    this.booksService.updateBook(this.book._id.$oid, this.borrowBookForm.value).subscribe(() => {
      this.router.navigate(['/books']);

    });
  }

}
