import { ReadersService } from './../readers.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reader } from '../models/reader';
import { async } from '@angular/core/testing';
declare var $: any;
@Component({
  selector: 'app-readers-list',
  templateUrl: './readers-list.component.html',
  styleUrls: ['./readers-list.component.css']
})
export class ReadersListComponent implements OnInit {
  noReaders:any;
  searchText: string;
  readers: Reader[] = [];
  deleteThisReader: Reader;
  showSpinner: boolean = true;


  constructor(private readersService: ReadersService, private router: Router) { }

  ngOnInit() {
    this.loadReaders();
  }

  loadReaders() {
    this.showSpinner = true;
    this.readersService.getReaders().subscribe((readers) => {
      this.readers = readers.map((reader) => {
        reader.numberBooks = reader.books.length || 0;
        return reader;
      }).sort((a, b) => a.surname.toUpperCase() > b.surname.toUpperCase() ? 1 : -1);

      this.showSpinner = false;
    });
  }
  goToReaderDetails(reader: Reader) {
    this.showSpinner = true;
    this.router.navigate(['/readers', reader._id.$oid]);

  }
  showDeleteReaderWindow(reader) {
    this.deleteThisReader = reader;
    if (reader.books.length == 0) {
      $('#deleteReader').modal('show');
    } else {
      $('#returnBook').modal('toggle');
    }
  }
  deleteReader() {
    this.showSpinner = true;
    this.readersService.removeReader(this.deleteThisReader._id.$oid).subscribe((readers) => {
      this.deleteThisReader = null;
      this.loadReaders();
    });
  }
  goToReturnBook() {
    this.router.navigate(['/returnBook', this.deleteThisReader.books[0]])
  }
}
