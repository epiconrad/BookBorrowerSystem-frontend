import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBook } from './book';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookEditService {

  url = "http://localhost:8080/books/"
  constructor(private http: HttpClient) { }

  updateBook(book: IBook)
  {
    return this.http.put<any>(`${this.url}${book.bookId}`,book)
        .pipe(catchError(this.errorHandler)); 
  }

  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }
}


