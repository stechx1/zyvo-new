/* eslint-disable @next/next/no-img-element */
'use client';
import { poppins } from '@/utils/font';
import Link from 'next/link';
import { Container } from '.';
import { useRouter } from 'next/navigation';

export const Footer = () => {
  const router = useRouter();
  return (
    <>
      <Container>
        <div className='bg-[#3b4b4c] md:pt-20 p-8 my-2 text-white rounded-2xl'>
          <div className='container mx-auto flex flex-col justify-center '>
            <div className='flex justify-between  md:space-y-0 space-y-6'>
              <div className='flex flex-col md:gap-8 gap-3'>
                <h2 className={`md:text-2xl text-lg ${poppins.className}`}>
                  Account
                </h2>
                <div className='text-[#ffffff99] space-y-3 md:space-y-8 flex flex-col'>
                  <p
                    className='cursor-pointer'
                    onClick={() => router.push("/sign-up")}
                  >
                    Register
                  </p>
                  <p
                    className='cursor-pointer'
                    onClick={() => router.push("/sign-in")}
                  >
                    Login
                  </p>
                </div>
              </div>

              <div className='flex flex-col md:gap-8 gap-3'>
                <h2 className={`md:text-2xl text-lg ${poppins.className}`}>
                  Follow Us
                </h2>
                <div className='flex gap-2'>
                  <Link
                    href={
                      'https://www.facebook.com/profile.php?id=100094649903542'
                    }
                    target='blank'
                  >
                    <img
                      src='/icons/facebook-icon.svg'
                      className='md:w-10 w-8 cursor-pointer'
                      alt='fb'
                    />
                  </Link>

                  <Link
                    href={'https://www.instagram.com/zyvo.app'}
                    target='_blank'
                  >
                    <img
                      src='/icons/instagram-icon.svg'
                      className='md:w-10 w-8 cursor-pointer'
                      alt='instagram'
                    />
                  </Link>

                  <Link href='https://twitter.com/zyvoapp' target='_blank'>
                    <img
                      src='/icons/twitter-icon.svg'
                      className='md:w-10 w-8 cursor-pointer'
                      alt='twitter'
                    />
                  </Link>

                </div>
              </div>
            </div>

            <div className='my-12 flex justify-center items-center'>
              <div className='flex gap-4 '>
                <img
                  className='w-10  md:w-full md:h-full'
                  src='/icons/amex.png'
                  alt='amex'
                />
                <img
                  className='w-10  md:w-full md:h-full'
                  src='/icons/apple-pay.png'
                  alt='apple'
                />
                <img
                  className='w-10  md:w-full md:h-full'
                  src='/icons/mastercard.png'
                  alt='mc'
                />
                <img
                  className='w-10  md:w-full md:h-full'
                  src='/icons/visa.png'
                  alt='visa'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center py-2 md:space-y-0 space-y-6'>
              <p className='text-[#ffffff99]'>Zyvo © Copyright 2023</p>
              <img src='icons/white-logo.svg' alt='logo' />
              <div className='flex gap-2 text-[#ffffff99]'>
                <Link href='/privacy'>Privacy Policy</Link>
                <p>|</p>
                <Link href='/terms-of-service'>Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
