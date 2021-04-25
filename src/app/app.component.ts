import { Component } from "@angular/core";

import { Store, select } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = 'Stefan Sweig App';
  counter = 0;
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  code: string = `
  function Shape(){
    // this is a comment
    this.name = 'Shape';
    this.toString = function(){return this.name;};
  }
  
  
  function Shape2D(){
    this.name = 'Shape 2D';
  }
  
  function Triangle(base,height){
      this.name = 'Triangle';
      this.base = base;
      this.height = height;
      this.getArea = function(){return this.base*this.height/2;};
  }
  `

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--
  }
}
