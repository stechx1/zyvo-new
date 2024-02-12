/* eslint-disable @next/next/no-img-element */
'use client';
import {
  DetailsSection,
  HeroSection,
  ItsAll,
  SetsApartSection,
  ShortTermSection,
} from '@/collections';
import { LaunchingSection } from '@/collections/LaunchingSection';

import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useUser();
  return (
    <>
      <div className='bg-[url("/background2.svg")] bg-cover bg-center flex flex-col justify-center items-center '>
        <HeroSection />
      </div>
      <div className='md:space-y-28 space-y-12'>
        <LaunchingSection />
        <DetailsSection isLoggedIn={isSignedIn} />
        <ShortTermSection />
        <SetsApartSection />
        {!isSignedIn && <ItsAll />}
      </div>
    </>
  );
}
