import React from 'react';
import BookCards from '../shared/BookCards';
import { IBook } from '@/types/books.type';

const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-16 px-4">

      {/* Section Header */}
      <div className="mb-8 text-center">
        <p className="mb-1 text-sm font-medium text-green-600">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-800">
          Featured Books
        </h2>
      </div>

      {/* Books Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0,6).map((book:IBook, index:number) => {
          return <BookCards key={index} book={book}/>
        }
         
        )}
      </div>
    </section>
  );
};

export default Books;

