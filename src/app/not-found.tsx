'use client';
import Link from 'next/link'
 import Image from 'next/image'
export default function NotFound() {
  return (
    <div className='relative flex flex-col items-center justify-center  h-[calc(100vh-74px)] w-full overflow-hidden'>
      <div className='absolute top-0 z-0 rotate-[75deg] sm:-top-60 '>
      <Image  src='/elect.svg' width={550} height={500} alt='elect' />

      </div>
      <div className='z-10 flex flex-col items-center justify-center mx-3 mb-40 space-y-6'>
      <h2 className='text-[100px] md:text-[120px] font-semibold'>Oops !</h2>
      <div className='flex flex-col items-center justify-center'>
      <p className='text-lg text-center'>we’re sorry. the page you requested could no be found.</p>
      <p className='text-lg'>Please go back to the home page.</p>
      </div>
      <Link href="/" className='px-3 py-1 text-lg font-semibold transition rounded cursor-pointer bg-amber hover:bg-darkamber '>
         Go home
      </Link>
      </div>
      
      
      
    </div>
  )
}