import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Router, { useRouter } from "next/router";
import Image from "next/image";

// import carousel images
import images from "../helpers/carouselImages";

const WorkCarousel = (props: any) => {
  const router = useRouter();
  const handleclick = (image: any) => {
    router.push(image, undefined, { shallow: true });
  };
  return (
    <Carousel
      stopOnHover
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={false}
      className="max-w-full max-h-full p-1 border border-gray-600"
    >
      {images.map((image, index) => {
        return (
          <div
            onClick={() => handleclick(image.vercel_url)}
            key={index}
            className="cursor-pointer"
          >
            <Image src={image.image} width={700} height={500} alt=""
            className="w-full h-full"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default WorkCarousel;
