'use client';
import Link from 'next/link';
import Image from 'next/image';
export default function NotFound() {
  return (
    <div className='relative flex h-[calc(100vh-74px)] w-full flex-col  items-center justify-center overflow-hidden'>
      <div className='absolute top-0 z-0 rotate-[75deg] sm:-top-60 '>
        <Image
          src='/elect.svg'
          width={550}
          height={500}
          alt='elect'
        />
      </div>
      <div className='z-10 mx-3 mb-40 flex flex-col items-center justify-center space-y-6'>
        <h2 className='text-[100px] font-semibold md:text-[120px]'>Oops !</h2>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center text-lg'>
            we’re sorry. the page you requested could no be found.
          </p>
          <p className='text-lg'>Please go back to the home page.</p>
        </div>
        <Link
          href='/'
          className='cursor-pointer rounded bg-amber px-3 py-1 text-lg font-semibold transition hover:bg-darkamber '
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
