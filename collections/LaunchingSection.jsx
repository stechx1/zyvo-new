import { Container } from '@/components';
import { mont, inter } from '@/utils/font';
import { Button } from '@/components';
import { Timer } from '@/components/Timer';
import { useRouter } from 'next/navigation';

/* eslint-disable @next/next/no-img-element */
export const LaunchingSection = () => {
  const router = useRouter();

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
        <div className="bg-[url('/launch/background.svg')] bg-cover bg-center bg-no-repeat md:p-12 p-6 lg:flex lg:flex-row min-h-[550px] md:rounded-3xl rounded-2xl w-full lg:justify-between lg:items-center flex-col flex space-y-6 lg:space-y-0 justify-center items-center">
          <div className='flex flex-col space-y-6 md:items-start justify-center md:justify-start items-center'>
            <div
              className={`flex md:flex-col space-x-2 md:space-x-0 flex-row ${mont.className}`}
            >
              <h2 className='md:text-5xl text-2xl text-[#3A4B4C] font-bold'>
                Launching
              </h2>
              <h2 className='md:text-5xl text-2xl text-[#3A4B4C] font-bold '>
                August 2024
              </h2>
            </div>
            <div
              className={`md:flex flex-col hidden  text-[#3A4B4C] ${inter.className}`}
            >
              <p>A new way of renting and booking spaces hour by hour. </p>
              <p>Find or offer spaces tailored to your short-term needs.</p>
            </div>
            <div
              className={`flex md:hidden flex-col text-[#3A4B4C] ${inter.className}`}
            >
              <p className='text-center'>
                A new way of renting and booking spaces hour by hour. Find or
                offer spaces tailored to your short-term needs.
              </p>
            </div>
            <div className='hidden md:block'>
              <Button onClick={() => router.push('/sign-up')} type={'outline'}>
                Register Today
              </Button>
            </div>
            <Timer />
            <div className='md:hidden'>
              <Button onClick={() => router.push('/sign-up')} type={'outline'}>
                Register Today
              </Button>
            </div>
          </div>
          {/* Grid */}
          <div className='md:grid md:grid-cols-3 md:gap-6 gap-4 grid grid-cols-2'>
            {types.map((type) => (
              <div
                className='md:min-w-[200px] md:min-h-[200px] min-w-[150px] min-h-[150px] p-4 flex items-end md:rounded-3xl rounded-3xl bg-cover bg-center bg-no-repeat'
                key={type.id}
                style={{ backgroundImage: `url(${type.photo})` }}
              >
                <div className='flex flex-col space-y-2'>
                  <img
                    className='md:w-[48px] w-[32px]'
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
