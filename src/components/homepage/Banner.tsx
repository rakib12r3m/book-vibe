import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-green-100 px-6 py-8 shadow-sm md:px-12 md:py-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          
          {/* Content */}
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Discover Your Next Read
            </span>

            <h1 className="text-4xl font-bold leading-tight text-slate-800 md:text-5xl lg:text-6xl">
              Books to freshen up
              <br />
              your bookshelf
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read.
            </p>

            <button className="btn btn-success rounded-full px-7 text-base shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
              View The List
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={bannerImg}
                alt="Books on a bookshelf"
                priority
                className="h-auto w-full max-w-md object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

