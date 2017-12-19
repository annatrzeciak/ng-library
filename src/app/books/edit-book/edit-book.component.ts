import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: Book;
  bookForm: FormGroup;

  constructor(private booksService: BooksService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadBook();
    this.bookForm = this.buildBookForm();

  }
  loadBook() {
    this.book = this.route.snapshot.data['book'];

  }
  buildBookForm() {

    return this.formBuilder.group({
      title: [this.book.title, Validators.required],
      author: [this.book.author, Validators.required],
      housePublishing: this.book.housePublishing,
      year: this.book.year,
      ISBN: [this.book.ISBN,Validators.required],
      isBorrowed: this.book.isBorrowed,
      idReader: this.book.idReader
    });
  }
  updateBook() {
    this.booksService.updateBook(this.book._id.$oid, this.bookForm.value).subscribe(() => {
      this.router.navigate(['/books']);
      this.bookForm.reset();
    });
  }

}
