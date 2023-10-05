import { Swiper, SwiperSlide } from 'swiper/react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import { desktopGallery, gallery, mobileGallery } from '../data';
import SwiperButtonNext from './SwiperButtonNext';
import SwiperButtonPrev from './SwiperButtonPrev';

// Import Swiper styles
import 'swiper/css';

const Gallery = () => {
  return (
    <section>
      <h3 className='text-center text-secondary text-3xl tracking-[0.01444rem] pt-[2.5rem] pb-[2.38rem]'>
        Gallery
      </h3>
      <div className=''>
        <Swiper slidesPerView='auto' spaceBetween={10}>
          {gallery.map((item) => {
            return (
              <SwiperSlide key={item.id} className='w-fit'>
                <div>
                  <img
                    src={item.img}
                    className='object-cover min-w-[21.5625rem] min-h-[12.3125rem] max-h-[27.1875rem] max-w-[45.625rem] rounded-lg '
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <div className='flex justify-center align-middle gap-[9.4rem] pt-[2.69rem] pb-[4.62rem] lg:pb-[6.69rem] lg:pt-[4.62rem]'>
            <SwiperButtonPrev>
              <img src={arrowLeft} alt='' />
            </SwiperButtonPrev>
            <SwiperButtonNext>
              <img src={arrowRight} alt='' />
            </SwiperButtonNext>
          </div>
        </Swiper>
      </div>
      <div className='grid grid-cols-2 pl-[2.5rem] md:hidden'>
        {mobileGallery.map((item) => {
          return (
            <div
              key={item.id}
              className='mr-[1.94rem] my-[1.88rem] transition ease-in-out hover:scale-125'
            >
              <img src={item.img} alt='mobile-image' />
            </div>
          );
        })}
      </div>
      <div className='hidden md:grid md:grid-cols-4 gap-[1.88rem] px-[10.31rem]'>
        {desktopGallery.map((item) => {
          return (
            <div
              key={item.id}
              className='transition ease-in-out hover:scale-125'
            >
              <img src={item.img} alt='desktop-image' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
