import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'
import { IBook } from '../book';
import { BookAddService } from '../book-add.service';
import { BookEditService } from '../book-edit.service';
import { BookDeleteService } from '../book-delete.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  /*template: `
  <h3>Book List</h3>
  <ul *ngFor="let book of books">
    <li>{{book.bookId}}. {{book.title}} {{book.author}} {{book.category}} {{book.year}} </li>
  </ul>
  `,*/
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books = [];
  
  constructor(private _bookService : BookService) { }

  ngOnInit() {
    this._bookService.getJSON()
      .subscribe(data => this.books = data);
  }
}
