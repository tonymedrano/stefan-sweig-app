/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app/src/app/state/books.actions.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app
 * Created Date: Saturday, April 24th 2021, 7:39:39 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sat Apr 24 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

 import { createAction, props } from '@ngrx/store';

 export const addBook = createAction(
   '[Book List] Add Book',
   props<{ bookId }>()
 );
 
 export const removeBook = createAction(
   '[Book Collection] Remove Book',
   props<{ bookId }>()
 );
 
 export const retrievedBookList = createAction(
   '[Book List/API] Retrieve Books Success',
   props<{ Book }>()
 );