import Layout from '../../components/layout';

import ServiceHex from '../../components/serviceHex';
import Close from '../../components/close';

import data from '../../resources/json/services.json';
import HeaderTitle from '../../components/heading/HeaderTitle';
import HeaderWrapper from '../../components/heading/HeaderWrapper';

const Resume = () => {
  return (
    <Layout services>
      <Close />
      <div className='container w-full sm:w-[750px] md:w-[970px] lg:w-full mx-auto grid gap-5 px-[15px]'>
        <div className='float-left relative px-[15px] flex justify-center text-center'>
          <HeaderWrapper mb={50}>
            <HeaderTitle data={data.title} />
          </HeaderWrapper>
        </div>
        <div className='services flex justify-center flex-wrap'>
          {data.services.slice(0, 5).map((service: any, index: number) => {
            return <ServiceHex data={service} key={index} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
