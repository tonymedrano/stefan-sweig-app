/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app/src/app/book-list/books.model.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/stefan-sweig-app
 * Created Date: Saturday, April 24th 2021, 7:46:44 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sat Apr 24 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

 export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors: Array<string>;
    };
}