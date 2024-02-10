import { Container } from '@/components';
import { poppins } from '@/utils/font';
import { Button } from '@/components';

/* eslint-disable @next/next/no-img-element */
export const LaunchingSection = () => {
  const types = [
    {
      id: 1,
      heading: 'Stays',
      icon: '/launch/bed.svg',
      photo: '/launch/stays.png',
    },
    {
      id: 2,
      heading: 'Music Videos',
      icon: '/launch/music.svg',
      photo: '/launch/music.png',
    },
    {
      id: 3,
      heading: 'Photo Shoots',
      icon: '/launch/photo-shoot.svg',
      photo: '/launch/photo-shoots.png',
    },
    {
      id: 4,
      heading: 'Event Spaces',
      icon: '/launch/event-space.svg',
      photo: '/launch/event-spaces.png',
    },
    {
      id: 5,
      heading: 'Meetings',
      icon: '/launch/meetings.svg',
      photo: '/launch/meetings.png',
    },
    {
      id: 6,
      heading: 'Much More',
      icon: '/launch/more.svg',
      photo: '/launch/more.png',
    },
  ];
  return (
    <Container>
      <div
        data-aos='fade-up'
        className='container mx-auto flex flex-col justify-center items-center gap-8'
      >
        <div className="bg-[url('/launch/background.svg')] bg-cover bg-center bg-no-repeat p-12 md:flex md:flex-row min-h-[550px] rounded-3xl renting-spaces-item w-full md:justify-between md:items-center flex-col flex">
          <div className='flex flex-col space-y-6'>
            <div className='flex flex-col'>
              <h2 className='text-[50px] text-[#3A4B4C] font-bold'>
                Launching
              </h2>
              <h2 className='text-[50px] text-[#3A4B4C] font-bold mt-[-10px]'>
                April 2024
              </h2>
            </div>
            <div className='flex flex-col items-center text-[#3A4B4C]'>
              <p>A new way of renting and booking spaces hour by hour. </p>
              <p>Find or offer spaces tailored to your short-term needs.</p>
            </div>
            <Button type={'outline'}>Register Today</Button>
          </div>
          {/* Grid */}
          <div className='md:grid md:grid-cols-3 gap-6'>
            {types.map((type) => (
              <div
                className='w-[200px] h-[200px] p-4 flex items-end rounded-3xl bg-cover bg-center bg-no-repeat'
                key={type.id}
                style={{ backgroundImage: `url(${type.photo})` }}
              >
                <div className='flex flex-col space-y-2'>
                  <img
                    className='w-[48px]'
                    src={type.icon}
                    alt={type.heading}
                  />
                  <h2 className='text-white'>{type.heading}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
