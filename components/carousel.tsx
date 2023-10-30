import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Image from 'next/image';

// import carousel images
import images from '../helpers/carouselImages';

const WorkCarousel = (props: any) => {
  return (
    <Carousel
      stopOnHover
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={false}
      className='max-w-full max-h-full p-1 border border-gray-600'
    >
      {images.map((image, index) => {
        return (
          <div key={index}>
            <Image src={image} alt='' />
          </div>
        );
      })}
    </Carousel>
  );
};

export default WorkCarousel;
