import { Book } from './../models/book';
import { BooksService } from './../books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

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
      title: ['', Validators.required],
      author: ['', Validators.required],
      housePublishing: '',
      year: 1900,
      ISBN: [0, Validators.required],
      isBorrowed: false,
      idReader: ''
    });
  }
  addBook() {
    this.booksService.addBook(this.bookForm.value).subscribe(() => {
      this.router.navigate(['/books']);
      this.bookForm.reset();
    });
  }

}


