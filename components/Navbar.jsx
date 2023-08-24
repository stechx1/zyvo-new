'use client';
import { Button } from './Button';
import { useRouter } from 'next/navigation';
import { Container } from './Container';
// import {
//   UserButton, useUser
// } from '@clerk/nextjs';

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  var isSignedIn = false;
  // const { isSignedIn } = useUser();

  const router = useRouter();
  return (
    <div className=' bg-white py-5 shadow-sm  '>
      <Container>
        <div className='container mx-auto flex justify-between'>
          <img
            src='/logo.svg'
            alt='logo'
            className='md:w-40 w-28 cursor-pointer'
            onClick={() => router.push('/')}
          />

          <div className='flex gap-5 justify-center items-center'>
            <Button onClick={() => router.push('/about')} type='secondary'>
              About Us
            </Button>
            {isSignedIn ? (
              <>
                {/* <UserButton afterSignOutUrl='/' /> */}
              </>
            ) : (
              <Button
                onClick={() => {
                  router.push("/sign-up")
                }}
              >
                Sign Up
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
