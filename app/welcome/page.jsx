'use client';
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import { Button } from '@/components';
import { poppins } from '@/utils/font';
import { useUser } from '@clerk/nextjs';
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    const sendEmail = async () => {
      console.log(Boolean(user?.primaryEmailAddress?.emailAddress));
      const email = user?.primaryEmailAddress?.emailAddress;
      const response = await axios.post('/api/register', { email });
      console.log(response);
      // localStorage.setItem('isEmailSent', 'true');
    };
    if (user?.primaryEmailAddress?.emailAddress) {
      sendEmail();
    }
    setIsModalOpen(true);
  }, [user]);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=''>
      {/* <Modal
        title='Welcome to the Zyvo universe'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={<Button onClick={handleCancel}>Done</Button>}
      >
        <p>
          Thank you for signing up with Zyvo! We&apos;re excited to have you on
          board. Our website is coming soon, and we&apos;ll keep you updated on
          our progress. Stay tuned for an amazing experience! Thank you for your
          patience.
        </p>
        <div className='mt-6'>
          <p>Best Regards,</p>
          <p>The Zyvo Team</p>
        </div>
      </Modal> */}

      <div className='container mx-auto flex flex-col my-16  justify-center items-center'>
        <p className='text-lg font-bold'>Its Official!</p>
        <h2
          className={`text-center font-bold text-4xl my-4 ${poppins.className}`}
        >
          You&apos;re now part of the{' '}
          <span className='text-primary'>Zyvo Universe</span>
        </h2>
        <div className='flex flex-col gap-6 justify-center items-center text-center w-[60%]'>
          <p>We&apos;re stoked to have you on board!</p>
          <p>
            Thank you for joining our vibrant community of flexible adventurers
            and innovative hosts.
          </p>
          <p>
            Get ready to seize every moment, one hour at a time! Your journey
            with us promises endless possibilities, personalized experiences,
            and smart stays that save you both time and money.
          </p>
          <p>
            Stay tuned for hourly escapades, quick getaways, and tailored
            discoveries that perfectly match your style and needs.
          </p>
          <p>
            Explore now, unleash the fun, and make the most of your ZYVO
            journey.
          </p>
          <p className='font-bold'>
            It&apos;s time to <span className='text-primary'>ZYVO</span>LVE!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
