'use client';
import { useState } from 'react';
import { Button } from '.';

export const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}
      onClick={onClose}
    >
      <div className='flex items-center justify-center min-h-screen'>
        <div
          className='fixed inset-0 bg-black opacity-50 cursor-pointer'
          onClick={onClose}
          aria-hidden='true'
        ></div>
        <div className='z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>
              Welcome to the Zyvo Universe
            </h2>
            <button className='p-2 text-gray-500' onClick={onClose}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='mb-6'>{children}</div>
          <div className='flex justify-end'>
            <Button onClick={onClose}>Done</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
