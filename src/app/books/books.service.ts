import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Book } from './models/book';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/books-db/collections/books';
  readonly apiKey = '?apiKey=GoiXXQ40MtfUzXiKab0HjE_4gSPC2W72';
  constructor(private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.URL_DB  + this.apiKey)
      .map((res) => res.json());
  }
  getBook(id: string): Observable<Book> {
    return this.http.get(this.URL_DB + '/' + id + this.apiKey)
      .map((res) => res.json());
  }
  addBook(data): Observable<Book> {
    return this.http.post(this.URL_DB + this.apiKey, data)
      .map((res) => res.json());
  }
  updateBook(id: string, data): Observable<Book> {
    return this.http.put(this.URL_DB + '/' + id + this.apiKey, data)
      .map((res) => res.json());
  }
  removeBook(id: string): Observable<Book> {
    return this.http.delete(this.URL_DB + '/' + id + this.apiKey)
      .map((res) => res.json());
  }
}
