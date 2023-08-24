'use client';
import { Button } from './Button';
import { useRouter } from 'next/navigation';
import { Container } from './Container';
import { UserButton, useUser, SignedIn, SignedOut } from '@clerk/nextjs';

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {

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
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
              <Button
                onClick={() => {
                  router.push('/sign-up');
                }}
              >
                Sign Up
              </Button>
            </SignedOut>
          </div>
        </div>
      </Container>
    </div>
  );
};
