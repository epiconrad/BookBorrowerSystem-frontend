import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { IBook } from './book';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _url : string = "http://localhost:8080/books";
  //private _url: string = "./assets/data/books.json";
  
  constructor(private http: HttpClient) {
    /*this.getJSON().subscribe(data => {
      console.log(data)
    });*/
   }

   public getJSON(): Observable<any> {
    return this.http.get(this._url);
  }

  getBooks(): Observable<any> 
  {
    return this.http.get<IBook[]>(this._url).pipe(
                  catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse)
  {
    return observableThrowError(error.message || "Server Error");
  }
  /*getBooks(): Observable<IBook[]>
  { //return this.http.get(this._url);
    return this.http.get<IBook[]>(this._url);
    /*return [{"id": 1, "title": "Harry Potter", "author": "JK Rowling", "category": "Fiction", "year": 1997},
      {"id": 2, "title": "Game of Thrones : A song of Ice and Fire", "author": "George R.R.Martin", "category": "Fiction", "year": 1996},
      {"id": 3, "title": "Hunger Games", "author": "Suzanne Collins", "category": "Novel", "year": 2008}
    ];
  }*/
}
