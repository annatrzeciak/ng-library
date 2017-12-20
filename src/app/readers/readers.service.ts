import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Reader } from './models/reader';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReadersService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/books-db/collections/readers';
  readonly apiKey = '?apiKey=GoiXXQ40MtfUzXiKab0HjE_4gSPC2W72';
  constructor(private http: Http) { }

  getReaders(): Observable<Reader[]> {
    return this.http.get(this.URL_DB + this.apiKey)
      .map((res) => res.json());
  }
  getReader(id: string): Observable<Reader> {
    return this.http.get(this.URL_DB + '/' + id + this.apiKey)
      .map((res) => res.json());
  }
  addReader(data): Observable<Reader> {
    return this.http.post(this.URL_DB + this.apiKey, data)
      .map((res) => res.json());
  }
  updateReader(id: string, data): Observable<Reader> {
    return this.http.put(this.URL_DB + '/' + id + this.apiKey, data)
      .map((res) => res.json());
  }
  removeReader(id: string): Observable<Reader> {
    return this.http.delete(this.URL_DB + '/' + id + this.apiKey)
      .map((res) => res.json());
  }
}
