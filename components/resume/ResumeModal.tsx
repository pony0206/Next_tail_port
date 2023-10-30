import { FaCalendarAlt } from 'react-icons/fa';
import jsonData from '../../resources/json/resume.json';
import Line from './ModalDiv';

const Key = (value: any) => {
  return (
    <span className='w-fit text-[14px] py-1 px-5 bg-slate-900 text-yellow-50 rounded-full mx-[1vw]'>
      {value}
    </span>
  );
};

const getModalContent = (type: any, id: number) => {
  const data =
    type === 'Education'
      ? jsonData.resume[0].data[id]
      : jsonData.resume[1].data[id];
  return (
    <div className='p-2 flex flex-col gap-3 h-full justify-around items-center'>
      <Line>
        {Key(type)} in detail - {Key(id + 1)}
      </Line>
      <Line>
        {Key(type === 'Experience' ? 'Title: ' : 'University:')}
        <span>{'"' + data.title + '"'}</span>
        {Key('Duration: ')}
        <span>{data.duration[0] + ' - ' + data.duration[1]}</span>
      </Line>

      <div className='flex gap-3 w-full'>
        <div className='flex flex-col gap-3 max-w-[50%] justify-around'>
          <Line full={true}>
            {Key('Site URL: ')}
            <span>
              {data.subtitle
                ? data.subtitle
                : 'Not alive or deployed yet. (Or I did only some parts of the projects)'}
            </span>
          </Line>
          <Line>
            {Key(type === 'Experience' ? 'DID: ' : 'Learnt')}
            {data.content}
          </Line>

          <Line>
            {Key('Techs: ')}
            {data.label.map((one, index) => {
              return (
                <span
                  key={index}
                  className='py-1 px-2 rounded-2xl bg-emerald-600 mx-1'
                >
                  {one}
                </span>
              );
            })}
          </Line>
        </div>

        <div className='preview w-[50%] flex flex-col items-center'>
          {data.subtitle ? (
            <>
              <Line>
                <span className='text-[14px] leading-[14.6px] pb-0 animate-pulse'>
                  The iframe below may not work because of the
                  &quot;x-frame-option&quot;. If so, visit the site manually.
                </span>
              </Line>
              <iframe
                src={data.subtitle}
                className='w-full aspect-video rounded-md mt-[0.5vw] border-2 border-gray-500'
              ></iframe>
            </>
          ) : (
            <div className='noPreview w-full aspect-video rounded-md flex text-center justify-center items-center border-2 border-gray-500'>
              No Preview
            </div>
          )}
        </div>
      </div>

      <Line>
        <span className='inline-block w-full text-center'>
          JUST PRESS ANY ITEM TO VIEW IT IN DETAIL
        </span>
      </Line>
    </div>
  );
};

const ResumeModal = (props: any) => {
  let mleft;
  let mtop;
  if (props.top / 16 >= 27) {
    // mtop = props.top / 16 - 27 + 'vw';
    mtop = props.top / 16 - 32 + 'vw';
  }
  mleft = props.left / 16 - 23 > 0 ? props.left / 16 - 23 + 'vw' : '0px';
  if (props.left / 16 + 23 >= 100) {
    mleft = '54vw';
  }

  return (
    <div
      className='z-[10] fixed rounded-lg top-0 left-0 ml-[200px] w-[46vw] h-[26vw] border-solid border-2 border-white border-opacity-70 p-2'
      style={{
        marginLeft: mleft,
        marginTop: mtop,
      }}
    >
      <div className='w-full h-full rounded-md bg-slate-900 bg-opacity-90 border-zinc-800 border-[1px]text-black'>
        {getModalContent(props.type, props.id)}
      </div>
    </div>
  );
};

export default ResumeModal;
