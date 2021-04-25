/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app/src/app/state/collection.reducer.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app
 * Created Date: Saturday, April 24th 2021, 7:42:13 pm
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
 import { addBook, removeBook } from './books.actions';
 
 export const initialState: ReadonlyArray<string> = [];
 
 export const collectionReducer = createReducer(
   initialState,
   on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
   on(addBook, (state, { bookId }) => {
     if (state.indexOf(bookId) > -1) return state;
 
     return [...state, bookId];
   })
 );