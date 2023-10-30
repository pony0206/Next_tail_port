import Link from 'next/link';
import { FaTimesCircle } from 'react-icons/fa';
import Close from '../../components/close';
import Footer from '../../components/footer';
import HeaderTitle from '../../components/heading/HeaderTitle';
import HeaderWrapper from '../../components/heading/HeaderWrapper';
import Layout from '../../components/layout';
import TestimonialsCarousel from '../../components/Testimonials';

import data from '../../resources/json/testimonials.json';

const Testimonials = () => {
  return (
    <Layout testimonials>
      <Close />
      <div className='container max-w-[1170px] mx-auto grid gap-5 mb-8'>
        <div className='float-left relative px-[15px] flex justify-center text-center'>
          <HeaderWrapper mb={20}>
            <HeaderTitle data={data.title} />
          </HeaderWrapper>
        </div>
        <div className='testimonial flex justify-center relative'>
          <TestimonialsCarousel />
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
