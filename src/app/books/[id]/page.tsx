import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishLishButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import { parse } from 'path';
import React from 'react';

interface IBookDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();
  return data;
};

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();
  // const book = booksData.find((book:IBook) => String(book.bookId) === id);
  const book = booksData.find((book: IBook) => String(book.bookId) === String(id)) as IBook;
  // console.log('params from BookDetail', book);

  return (

    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side overflow-hidden border border-base-300 bg-base-100 shadow-xl">

        {/* Book Image */}
        <figure className="bg-base-200 p-6 lg:w-2/5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={700}
            height={600}
            className="h-full w-full rounded-2xl object-cover shadow-lg"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body lg:w-3/5 lg:p-10">

          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="badge badge-success badge-outline">
              {book.category}
            </span>

            <span className="text-sm text-base-content/50">
              {book.yearOfPublishing}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-base text-base-content/60">
            Written by{" "}
            <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-xl">⭐</span>
              <span className="font-bold">{book.rating}</span>
              <span className="text-sm text-base-content/50">
                / 5
              </span>
            </div>

            <div className="h-5 w-px bg-base-300"></div>

            <span className="text-sm text-base-content/60">
              {book.totalPages} pages
            </span>
          </div>

          {/* Review */}
          <div className="mt-5">
            <h3 className="mb-2 text-lg font-semibold">
              About this book
            </h3>

            <p className="text-sm leading-7 text-base-content/70 md:text-base">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-base-content/60">
              Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-neutral badge-outline"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-base-200 p-4 md:grid-cols-3">

            <div>
              <p className="text-xs text-base-content/50">
                Publisher
              </p>
              <p className="mt-1 font-semibold">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">
                Published
              </p>
              <p className="mt-1 font-semibold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">
                Pages
              </p>
              <p className="mt-1 font-semibold">
                {book.totalPages}
              </p>
            </div>

          </div>

          {/* Action */}
          <div className="card-actions mt-6 justify-end">
            <ReadButton book={book}/>
           <WishListButton book={book}/>
          </div>

        </div>
      </div>
    </div>


  );
};

export default BookDetailPage;