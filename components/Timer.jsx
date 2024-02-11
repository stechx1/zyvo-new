/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { poppins } from '@/utils/font';

export const Timer = () => {
  const [launchTime, setLaunchTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const target = new Date('4/30/2024 23:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setLaunchTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex md:space-x-3 space-x-1 items-center'>
      {/* Days */}
      <div className='flex md:min-w-[90px] min-w-[68px] flex-col space-y-[0.8px]'>
        <div className='bg-[#3A4B4C] md:p-4 pt-3 pb-1 px-3 rounded-2xl rounded-b-none'>
          <h2
            className={`md:text-5xl text-3xl font-medium text-center text-white ${poppins.className}`}
          >
            {days}
          </h2>
        </div>
        <div className='bg-[#3A4B4C] p-2 rounded-xl rounded-t-none'>
          <h2 className='text-center text-sm text-white'>Days</h2>
        </div>
      </div>

      <div>
        <div className='w-full md:block hidden'>
          <img src='/launch/dots.svg' alt='dots' />
        </div>

        <div className='md:hidden block'>
          <img src='/launch/dots-mob.svg' alt='dots' />
        </div>
      </div>

      {/* Hours */}
      <div className='flex md:min-w-[90px] min-w-[68px] flex-col space-y-[0.8px]'>
        <div className='bg-[#3A4B4C] md:p-4 pt-3 pb-1 px-3 rounded-2xl rounded-b-none'>
          <h2
            className={`md:text-5xl text-3xl font-medium text-center text-white ${poppins.className}`}
          >
            {hours}
          </h2>
        </div>
        <div className='bg-[#3A4B4C] p-2 rounded-xl rounded-t-none'>
          <h2 className='text-center text-sm text-white'>Hours</h2>
        </div>
      </div>

      <div>
        <div className='w-full md:block hidden'>
          <img src='/launch/dots.svg' alt='dots' />
        </div>

        <div className='md:hidden block'>
          <img src='/launch/dots-mob.svg' alt='dots' />
        </div>
      </div>

      {/* Minutes */}
      <div className='flex md:min-w-[90px] min-w-[68px] flex-col space-y-[0.8px]'>
        <div className='bg-[#3A4B4C] md:p-4 pt-3 pb-1 px-3 rounded-2xl rounded-b-none'>
          <h2
            className={`md:text-5xl text-3xl font-medium text-center text-white ${poppins.className}`}
          >
            {minutes}
          </h2>
        </div>
        <div className='bg-[#3A4B4C] p-2 rounded-xl rounded-t-none'>
          <h2 className='text-center text-white text-sm'>Minutes</h2>
        </div>
      </div>

      <div>
        <div className='w-full md:block hidden'>
          <img src='/launch/dots.svg' alt='dots' />
        </div>

        <div className='md:hidden block'>
          <img src='/launch/dots-mob.svg' alt='dots' />
        </div>
      </div>

      {/* Seconds */}
      <div className='flex md:w-[90px] w-[68px] flex-col space-y-[0.8px]'>
        <div className='bg-[#3A4B4C] md:p-4 pt-4 pb-1 px-3 rounded-2xl rounded-b-none'>
          <h2
            className={`md:text-5xl text-3xl font-medium text-center text-white ${poppins.className}`}
          >
            {seconds}
          </h2>
        </div>
        <div className='bg-[#3A4B4C] p-2 rounded-xl rounded-t-none'>
          <h2 className='text-center text-white text-sm'>Seconds</h2>
        </div>
      </div>
    </div>
  );
};
