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
      <h3 className='gallery-header'>Gallery</h3>
      <div className=''>
        <Swiper slidesPerView='auto' spaceBetween={10}>
          {gallery.map((item) => {
            return (
              <SwiperSlide key={item.id} className='w-fit'>
                <div>
                  <img src={item.img} className='gallery-img' />
                </div>
              </SwiperSlide>
            );
          })}
          <div className='gallery-btn-wrapper'>
            <SwiperButtonPrev>
              <img src={arrowLeft} alt='' />
            </SwiperButtonPrev>
            <SwiperButtonNext>
              <img src={arrowRight} alt='' />
            </SwiperButtonNext>
          </div>
        </Swiper>
      </div>
      <div className='mobile-gallery'>
        {mobileGallery.map((item) => {
          return (
            <div key={item.id} className='gallery-img-placeholder'>
              <img src={item.img} alt='mobile-image' />
            </div>
          );
        })}
      </div>
      <div className='desktop-gallery'>
        {desktopGallery.map((item) => {
          return (
            <div key={item.id} className='gallery-img-placeholder'>
              <img src={item.img} alt='desktop-image' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
