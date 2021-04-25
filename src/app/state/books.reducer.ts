/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app/src/app/state/books.reducer.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app
 * Created Date: Saturday, April 24th 2021, 7:41:27 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sat Apr 24 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

 import { createReducer, on, Action } from '@ngrx/store';

 import { retrievedBookList } from './books.actions';
 import { Book } from '../book-list/books.model';
 
 export const initialState: ReadonlyArray<Book> = [];
 
 export const booksReducer = createReducer(
   initialState,
   on(retrievedBookList, (state, { Book }) => [...Book])
 );