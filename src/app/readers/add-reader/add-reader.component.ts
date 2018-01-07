import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Reader } from '../models/reader';
import { ReadersService } from '../readers.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {

  reader: Reader;
  readerForm: FormGroup;
  showSpinner:boolean=true;

  constructor(private readersService: ReadersService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadReader();
    this.readerForm = this.buildReaderForm();

  }
  loadReader() {
    this.showSpinner=true;
    this.reader = this.route.snapshot.data['reader'];
this.showSpinner=false;
  }
  buildReaderForm() {

    return this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('[0-9]{2}\-[0-9]{3}')]],
      city: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      phone: ['', [Validators.required]],
      books: [[]],
      numberBooks: 0
    });
  }
  addReader() {
    this.showSpinner=true;
    this.readersService.addReader(this.readerForm.value).subscribe(() => {
      this.router.navigate(['/readers']);
      this.readerForm.reset();
      this.showSpinner=false;
    });
  }

}


