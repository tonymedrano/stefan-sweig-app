/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app/src/app/book-collection/book-collection.component.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app
 * Created Date: Saturday, April 24th 2021, 7:52:38 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sat Apr 24 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
    selector: 'app-book-collection',
    templateUrl: './book-collection.component.html',
    styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent {
    @Input() books: Array<Book>;
    @Output() remove = new EventEmitter();
}