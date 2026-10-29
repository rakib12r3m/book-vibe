'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }:{book:IBook}) => {

  // const booksProvider = useContext(BooksContext)
  const {readBooks, setReadBooks} = useContext(BooksContext);
  // console.log(booksProvider, "Books Provider");

  

  const handleReadBook = () => {
    console.log("read book button triggered", book);
    // setReadBooks((prevReadBooks)=> [...prevReadBooks,book]);
    setReadBooks([...readBooks,book]);
    toast.success(`you have read ${book.bookName}`)

  }

  return (
    <button onClick={() => handleReadBook()} className="btn btn-success rounded-xl px-8 shadow-md transition hover:scale-105">
      Read
    </button>
  );
};

export default ReadButton;