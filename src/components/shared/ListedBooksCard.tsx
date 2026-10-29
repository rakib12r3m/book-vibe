import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({ book }: {book:IBook}) => {
  return (
    <div
      
      className="group mb-5 flex flex-col gap-5 overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row"
    >

      {/* Book Image */}
      <div className="shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={180}
          height={240}
          className="h-48 w-full rounded-xl object-cover sm:h-52 sm:w-36"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col">

        {/* Category & Year */}
        <div className="flex items-center gap-2">
          <span className="badge badge-success badge-outline">
            {book.category}
          </span>

          <span className="text-xs text-base-content/50">
            {book.yearOfPublishing}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-2 text-2xl font-bold text-base-content">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-base-content/60">
          by{' '}
          <span className="font-semibold text-base-content">
            {book.author}
          </span>
        </p>

        {/* Rating & Pages */}
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
          <span className="font-semibold">
            ⭐ {book.rating}
          </span>

          <span className="text-base-content/50">
            📖 {book.totalPages} pages
          </span>

          <span className="text-base-content/50">
            🏢 {book.publisher}
          </span>
        </div>

        {/* Review */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-base-content/60">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={`/books/${book.bookId}`}>
          <button className="btn btn-success btn-sm rounded-lg">
            View Details
          </button>
          </Link>

          <button className="btn btn-outline btn-sm rounded-lg">
                        ♡ Wishlist
                      </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;