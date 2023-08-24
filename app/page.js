/* eslint-disable @next/next/no-img-element */
'use client';
import {
  // DetailsSection,
  HeroSection,
  // ItsAll,
  // SetsApartSection,
  // ShortTermSection,
} from '@/collections';

import { useState } from 'react';
// import {
//   useUser
// } from '@clerk/nextjs';

export default function Home() {
  // const {isSignedIn } = useUser();
  return (
    <>
      <div className='bg-[url("/banner-bg.png")] bg-cover bg-center flex flex-col justify-center items-center '>
        <HeroSection />
      </div>
      <div className='md:space-y-28 space-y-12'>
        {/* <DetailsSection isLoggedIn={isSignedIn} setSignupModal={setSignupModal} />
        <ShortTermSection />
        <SetsApartSection /> */}
        {/* {!isSignedIn && <ItsAll setSignupModal={setSignupModal} />} */}
      </div>
    </>
  );
}
