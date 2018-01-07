import { Router, ActivatedRoute } from '@angular/router';
import { ReadersService } from './../readers.service';
import { Reader } from './../models/reader';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader-details',
  templateUrl: './reader-details.component.html',
  styleUrls: ['./reader-details.component.css']
})
export class ReaderDetailsComponent implements OnInit {
  reader: Reader;
  showSpinner: boolean = true;

  constructor(private readersService: ReadersService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadReader();

  }
  loadReader() {
    this.showSpinner = true;
    this.reader = this.route.snapshot.data['reader'];
    this.showSpinner = false;
  }
  goToEditReader(reader: Reader) {
    this.showSpinner = true;
    this.router.navigate(['/editReader', reader._id.$oid]);
    this.showSpinner = false;
  }
  goToDetailsBook(bookId:string){
    this.showSpinner=true;
    this.router.navigate(['/books', bookId]);


  }
}
