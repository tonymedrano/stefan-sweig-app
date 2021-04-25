/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app/src/app/book-list/books.service.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app
 * Created Date: Saturday, April 24th 2021, 7:47:57 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sat Apr 24 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}