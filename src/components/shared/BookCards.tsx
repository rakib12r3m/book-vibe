import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface IBookCardProps{
  book:IBook;
}

const BookCards = ({book}: IBookCardProps) => {
  return (
    <div
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-green-700 shadow-sm">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h3 className="line-clamp-1 text-lg font-bold text-slate-800">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="mt-1 text-xs text-slate-500">
          by{' '}
          <span className="font-medium text-slate-700">
            {book.author}
          </span>
        </p>

        {/* Rating + Pages */}
        <div className="mt-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span className="font-semibold">{book.rating}</span>
          </div>

          <span className="text-xs text-slate-500">
            {book.totalPages} pages
          </span>
        </div>



        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Publisher + Year */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <div>
            <p className="text-[10px] text-slate-400">Publisher</p>
            <p className="text-xs font-semibold text-slate-700">
              {book.publisher}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-slate-400">Year</p>
            <p className="text-xs font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`} className="btn btn-success btn-sm mt-4 w-full rounded-lg">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCards;