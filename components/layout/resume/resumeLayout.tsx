import Image from 'next/image';

import background from '../../../images/resume/background1.jpg';
import Background from '../../particleBackground';

const ResumeLayout = (props: any) => {
  return (
    <div className='ResumeLay relative'>
      <div className='absolute w-[100vw] opacity-90 h-[100vh] resumeBack top-0 left-0 z-[-1]'>
        <Background />
      </div>
      <div className='bg-stone-900 bg-opacity-70 w-[100vw] h-[100vh]'>
        {props.children}
      </div>
    </div>
  );
};

export default ResumeLayout;
