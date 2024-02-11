import { Container } from '@/components';
import { poppins } from '@/utils/font';
import { Button } from '@/components';
import { Timer } from '@/components/Timer';

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
        <div className="bg-[url('/launch/background.svg')] bg-cover bg-center bg-no-repeat md:p-12 p-6 lg:flex lg:flex-row min-h-[550px] rounded-3xl w-full lg:justify-between lg:items-center flex-col flex space-y-6 lg:space-y-0 justify-center items-center">
          <div className='flex flex-col space-y-6 items-start'>
            <div className='flex flex-col'>
              <h2 className='text-5xl text-[#3A4B4C] font-bold'>Launching</h2>
              <h2 className='text-5xl text-[#3A4B4C] font-bold '>April 2024</h2>
            </div>
            <div className='flex flex-col  text-[#3A4B4C]'>
              <p>A new way of renting and booking spaces hour by hour. </p>
              <p>Find or offer spaces tailored to your short-term needs.</p>
            </div>
            <Button type={'outline'}>Register Today</Button>
            <Timer />
          </div>
          {/* Grid */}
          <div className='md:grid md:grid-cols-3 gap-6 grid grid-cols-2'>
            {types.map((type) => (
              <div
                className='md:min-w-[200px] md:min-h-[200px] min-w-[150px] p-4 flex items-end md:rounded-3xl rounded-2xl bg-cover bg-center bg-no-repeat'
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
