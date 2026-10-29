'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }:{book:IBook}) => {

  // const booksProvider = useContext(BooksContext)
  const {wishlist, setWishlist} = useContext(BooksContext);
  // console.log(booksProvider, "Books Provider");

  

  const handleAddToWishlist = () => {
    console.log("read book button triggered", book);
    // setReadBooks((prevReadBooks)=> [...prevReadBooks,book]);
    setWishlist([...wishlist,book]);
    toast.success(`you have read ${book.bookName}`)

  }

  return (
    <button onClick={() => handleAddToWishlist()} className="btn btn-success rounded-xl px-8 shadow-md transition hover:scale-105">
      Add to Wishlist
    </button>
  );
};

export default WishListButton;