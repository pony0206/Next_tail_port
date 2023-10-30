import Layout from '../../components/layout';

import Close from '../../components/close';

import data from '../../resources/json/resume.json';
import HeaderTitle from '../../components/heading/HeaderTitle';
import ResumeBuild from '../../components/resume/ResumeBuild';
import HeaderWrapper from '../../components/heading/HeaderWrapper';

const Resume = () => {
  return (
    <Layout resume>
      <Close />
      <div className='container w-full sm:w-[750px] md:w-[970px] lg:w-[1170px] mx-auto grid gap-5 px-[20px]'>
        <div className='float-left relative pt-[15px] flex justify-center text-center'>
          <HeaderWrapper>
            <HeaderTitle data={data.title} />
          </HeaderWrapper>
        </div>
        <ResumeBuild data={data.resume} />
      </div>
    </Layout>
  );
};

export default Resume;
