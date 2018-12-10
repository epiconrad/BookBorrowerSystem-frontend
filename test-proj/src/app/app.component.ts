import { Component } from '@angular/core';
import { IBook } from './book';
import { BookAddService } from './book-add.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-proj';
  constructor()
  {

  }
}
