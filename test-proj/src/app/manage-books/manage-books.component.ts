import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service'
import { BookAddService } from '../book-add.service';
import { BookEditService } from '../book-edit.service';
import { BookDeleteService } from '../book-delete.service';
import { FormGroup, FormControl, NgForm, FormBuilder, Validators} from '@angular/forms';
import { BookListComponent } from '../book-list/book-list.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
  books: IBook;
  bookModel = new IBook(null,"","","",null);

  constructor(private fb: FormBuilder,private _bookService: BookService,private _bookAddService: BookAddService,
    private _bookEditService: BookEditService, private _bookDeleteService: BookDeleteService, 
    private toastr: ToastrService) { }

    bookForm = this.fb.group({
      bookId: [''],
      title: ['',Validators.required],
      author: ['',Validators.required],
      category: ['',Validators.required],
      year: ['']
    });
 
  ngOnInit() {
    this._bookService.getBooks()
      .subscribe(book => {
        this.books = book;
      });
  }

  onSubmit(bookForm: NgForm)
  {
    if(!this.bookForm.get('bookId').value)
    {
      this._bookAddService.addBook(this.bookForm.value)
      .subscribe(
        data => console.log('Success', data),
        error => console.log('Error!', error)
      )
      this.toastr.success('Added Successfully','Add Book');
    }
    else
    {
      this._bookEditService.updateBook(bookForm.value)
      .subscribe(
        data => console.log('Delete success', data),
        error => console.log('Error deletion', error)
      )
      this.toastr.success('Updated Successfully','Update Book');
    }
    bookForm.reset();
    window.location.reload();
  }

  onEditClick(book: IBook)
  {   
    this.bookForm.patchValue({
        bookId: book.bookId, 
        author: book.author,
        title: book.title, 
        category: book.category, 
        year: book.year
      });
    //console.log(book);
  }

  onDeleteClick(book, IBook)
  { 
    if(confirm("Are you sure to delete "+book.title)) 
    {
      console.log(book.bookId);
      this._bookDeleteService.deleteBook(book.bookId)
        .subscribe(
          data => console.log('Delete success', data),
          error => console.log('Error deletion', error)
        )
    }
    this.toastr.success('Deleted Successfully','Delete Book');
    window.location.reload();
  }

  resetForm()
  {
    this.bookForm.reset();
  }
}
