import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

//import data from testimonial.json
import data from '../resources/json/testimonials.json';
import image1 from '../images/testimonials/1.jpg';
import SlideData from './Testimonials/slideData';
import getImages from './Testimonials/getImages';

const nClients = data.comments.filter(
  (one) => one.job === 'Client' || one.job === 'CEO'
).length;
const nDevelopers = data.comments.filter(
  (one) => one.job === 'Developer'
).length;
const nDesigners = data.comments.filter((one) => one.job === 'Designer').length;

const plans = [
  {
    type: 'Clients',
    number: nClients,
    says: '6 CPUs',
  },
  {
    type: 'Developers',
    number: nDevelopers,
    says: '8 CPUs',
  },
  {
    type: 'Designers',
    number: nDesigners,
    says: '12 CPUs',
  },
];

const TestimonialsCarousel = () => {
  return (
    <Carousel
      autoPlay
      stopOnHover
      showArrows={true}
      interval={4000}
      showThumbs={false}
      infiniteLoop={true}
      className='max-w-full max-h-full p-1 border border-gray-600'
    >
      {data.comments.map((comment, index) => {
        let image = getImages(index);
        return (
          <div key={index} className='text relative w-full h-[300px] testItem'>
            <span className='absolute left-[2vw] top-[1vw]  rounded-full p-3 bg-black bg-opacity-60 w-fit flex'>
              <span className='w-fit rounded-full flex border-solid border-[2px] bg-white border-gray-500 border-opacity-50 p-[4px]'>
                {
                  <Image
                    src={image ? image : getImages(0)}
                    width={150}
                    height={150}
                    className='rounded-full'
                  ></Image>
                }
              </span>
            </span>
            <div className='w-full h-full exception'>
              {SlideData[index % 3]}
            </div>
            <p className='absolute bottom-0 left-0 w-full bg-black bg-opacity-90 pt-2 pb-8 px-3'>
              {comment.comment + ' (' + comment.name + ', ' + comment.job + ')'}
            </p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialsCarousel;
