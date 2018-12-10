import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { IBook } from './book';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookAddService {

  url = 'http://localhost:8080/books';
  constructor(private http: HttpClient) { }

  addBook(book: IBook)
  {
    return this.http.post<any>(this.url, book)
              .pipe(catchError(this.errorHandler)); 
  }

  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }
}
