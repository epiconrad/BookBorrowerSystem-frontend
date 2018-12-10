import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBook } from './book';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDeleteService {

  url = "http://localhost:8080/books/"
  constructor(private http: HttpClient) { }

  deleteBook(bookId: number)
  {
      return this.http.delete<any>(`${this.url}${bookId}`)
      .pipe(catchError(this.errorHandler)); 
  }

  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }
}
