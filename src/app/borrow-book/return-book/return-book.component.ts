import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from './../../books/books.service';
import { Book } from './../../books/models/book';
import { Component, OnInit } from '@angular/core';
import { Reader } from '../../readers/models/reader';
import { ReadersService } from '../../readers/readers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { filter } from 'rxjs/add/operator/filter';


@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  reader: Reader;
  book: Book;
  readers: Reader[] = [];
  borrowBookForm: FormGroup;
  showSpinner: boolean = true;

  constructor(private booksService: BooksService, private readersService: ReadersService,
    private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.showSpinner = true;
    this.loadBook();
    this.loadReaders();
    this.showSpinner = false;
  }
  loadBook() {

    this.book = this.route.snapshot.data['book'];

  } loadReaders() {
    this.readersService.getReaders().subscribe((readers) => {
      this.readers = readers.map((reader) => {
        reader.numberBooks = reader.books.length || 0;
        return reader;
      }).sort((a, b) => a.surname.toUpperCase() > b.surname.toUpperCase() ? 1 : -1);


    });
  }

  returnThisBook() {
    this.book.isBorrowed = false;

  
    this.readersService.getReader(this.book.idReader).subscribe(reader => {
      this.reader = reader;
      this.reader.books.splice(this.reader.books.indexOf(this.book._id.$oid), 1);
      this.readersService.updateReader(this.reader._id.$oid, this.reader).subscribe();
    });
    this.book.idReader="";
    this.booksService.updateBook(this.book._id.$oid, this.book).subscribe(() => {
      this.router.navigate(['/books']);

    });
    this.showSpinner = false;

  }

}
