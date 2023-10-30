import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

import ResumeModal from '../../components/resume/ResumeModal';

import SpecialHeading from '../heading/SpecialHeading';
import HistoryItem from '../historyItem';

const ResumeBuild = (props: any) => {
  const [state, setState] = useState({
    visiblity: false,
    type: 'Education',
    id: 0,
  });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const zClass = [
    'w-full lg:mx-0 z-[2] bg-[#11151d]',
    'w-full lg:mx-0 z-[1] bg-[#11151d]',
  ];

  const positionValidate = (e: any) => {
    let width = window.innerWidth;
    if (e.screenY / 16 < 21.5) {
      setState({ visiblity: false, type: state.type, id: state.id });
      return;
    }

    if (e.screenY / 16 > 48) {
      setState({ visiblity: false, type: state.type, id: state.id });
      return;
    }
    if (e.screenX <= (width - 1170) / 2) {
      setState({ visiblity: false, type: state.type, id: state.id });
      return;
    }
    if (e.screenX >= 1170 + (width - 1170) / 2) {
      setState({ visiblity: false, type: state.type, id: state.id });
      return;
    }
  };

  useEffect(() => {
    if (Math.floor(Math.random() * 10) > 5) {
      window.onmousemove = (e: any) => {
        positionValidate(e);

        setPos({ x: e.screenX, y: e.screenY });
      };
    }
  }, [state]);

  const handleWatch = (visiblity: any, type: any, id: number) => {
    const tempState = {
      visiblity: visiblity,
      type: type,
      id: id,
    };
    setState(tempState);
  };

  return (
    <div>
      <div className='resume flex flex-col lg:flex-row pb-9 gap-5 lg:gap-0'>
        {props.data.map((one: any, index: number) => {
          return (
            <div key={index} className={zClass[index % zClass.length]}>
              <div className='history-block bg-[#1e2530]'>
                <div className='section-title light clear border-b-[1px] border-solid border-[#293342] py-[15px] px-[34px]'>
                  <SpecialHeading>
                    {one.title + ' (' + one.data.length + ')'}
                  </SpecialHeading>
                </div>
                <div className='history-scroller overflow-y-scroll outline-none max-h-full lg:max-h-[377px]'>
                  {one.data.map((row: any, index: number) => {
                    return (
                      <div key={index}>
                        <HistoryItem
                          data={row}
                          type={one.title}
                          index={index}
                          watch={(visiblity: any, type: any, id: number) =>
                            handleWatch(visiblity, type, id)
                          }
                        />
                      </div>
                    );
                  })}
                  {one.data.length <= 2 && (
                    <HistoryItem
                      type={one.title}
                      blank={true}
                      index={one.data.length}
                      watch={(visiblity: any, type: any, id: number) =>
                        handleWatch(visiblity, type, id)
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeBuild;
