import image1 from '../../images/testimonials/1.jpg';
import image2 from '../../images/testimonials/2.jpg';
import image3 from '../../images/testimonials/3.jpg';
import image4 from '../../images/testimonials/4.jpg';
import image5 from '../../images/testimonials/5.jpg';

const getImages = (id: number) => {
  const array = [image1, image2, image3, image4, image5];
  // return array[Math.floor(Math.random() * array.length)];
  return array[id];
};

export default getImages;
