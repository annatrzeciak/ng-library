import { ReadersService } from './../readers.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reader } from '../models/reader';

@Component({
  selector: 'app-readers-list',
  templateUrl: './readers-list.component.html',
  styleUrls: ['./readers-list.component.css']
})
export class ReadersListComponent implements OnInit {
  readers: Reader[] = [];
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
}
