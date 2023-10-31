import image1 from "../images/sites/1/1.jpg";
import image2 from "../images/sites/1/2.jpg";
import image3 from "../images/sites/1/3.jpg";
import image4 from "../images/sites/1/4.jpg";
interface image01Props {
  image: string;
  vercel_url: string;
}

const image001: image01Props = {
    image: "/images/sites/1/001.jpg",
    vercel_url: "https://www.truedigital.co.uk/our-work/",
  };
const image01: image01Props = {
  image: "/images/sites/1/1.jpg",
  vercel_url: "https://froffer.com/",
};

const image02: image01Props = {
  image: "/images/sites/1/2.jpg",
  vercel_url: "https://www.simboz.com/",
};
const image03: image01Props = {
  image: "/images/sites/1/3.jpg",
  vercel_url: "https://turtlerockpreschool.com/",
};
const image04: image01Props = {
  image: "/images/sites/1/4.jpg",
  vercel_url: "https://palmph.co.uk/",
};
const image05: image01Props = {
    image: "/images/sites/1/5.jpg",
    vercel_url: "https://dustnboots.com/",
  };
const images = [image01, image001,image02, image03, image04, image05];
 
export default images;
