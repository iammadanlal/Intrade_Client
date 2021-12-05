import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y, Autoplay, EffectFade } from 'swiper';
import homeBanner1 from '../../Assets/images/cnc-machines.webp';
import homeBanner2 from '../../Assets/images/modality-automation.webp';
import classes from './swiper.module.css'

// import Swiper core and required modules
//import SwiperCore, { Navigation, A11y, Autoplay, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// install Swiper modules
SwiperCore.use([Navigation, A11y, Autoplay, EffectFade]);

export default function HomeBanner(){
  const applyData = [
    { title: 'CITB Test', imgSrc: homeBanner1 },
    { title: 'Courses', imgSrc: homeBanner2 },
    { title: 'CSCS Card', imgSrc: homeBanner1 },
    { title: 'Exam', imgSrc: homeBanner2 },
  ];

  return(
    <div className="rt-homebanner">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {applyData.map(applyObj=>(
          <SwiperSlide key={applyObj.title} className={classes.swiperSlide}>
            {({ isVisible }) => (
              <div className="">
                <div className="rt-img-wrapper rt-res">
                  <img src={applyObj.imgSrc} alt={applyObj.title} />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}