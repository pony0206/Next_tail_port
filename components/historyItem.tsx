import { useState } from 'react';
import {
  FaBriefcase,
  FaCloud,
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGraduationCap,
  FaPlus,
} from 'react-icons/fa';
import Blank from './history/blankItem';

const HistoryItem = (props: any) => {
  const [wrap, setWrap] = useState(true);

  const exClassName = 'group-hover:animate-bounce text-[25px]';
  const exIcons = [
    <FaBriefcase className={exClassName} key={1} />,
    <FaCloud className={exClassName} key={2} />,
    <FaGlobeEurope className={exClassName} key={3} />,
    <FaGlobeAmericas className={exClassName} key={4} />,
    <FaGlobeAsia className={exClassName} key={5} />,
    <FaGlobeAfrica className={exClassName} key={6} />,
  ];
  const optionClass = [
    'group text-left history-item cursor-pointer px-9 py-[20px] flex items-center hover:bg-[#0c0f15] bg-[#0c0f15b7]',
    'group text-left history-item  cursor-pointer px-9 py-[20px] flex items-center hover:bg-[#0c0f15] bg-[#1e2530]',
  ];

  const handleEnter = (e: any) => {
    let width = localStorage.getItem('width');
    let tWidth = width ? parseInt(width) : 1600;
    tWidth >= 1600 && props.watch(!props.blank, props.type, props.index);
  };

  const ClickHandle = () => {
    wrap ? setWrap(false) : setWrap(true);
  };

  return (
    <div
      className={
        optionClass[
          props.type === 'Education' ? props.index % 2 : (props.index + 1) % 2
        ]
      }
      onClick={ClickHandle}
      onMouseEnter={handleEnter}
    >
      <div className='history-icon w-[66px] h-[66px] align-middle'>
        <span className='history-hex h-[33.11px] w-[66px] relative bg-[#293342] my-[19.05px] before:bottom-[100%] before:border-b-[19.05px] before:border-b-[#293342] before:border-w-0 after:top-[100%] after:border-t-[19.05px] after:border-t-[#293342] after:border-w-0 after:w-0 flex justify-center items-center'>
          {!props.blank && props.type === 'Education' && (
            <FaGraduationCap className='group-hover:animate-bounce text-[25px]' />
          )}
          {!props.blank &&
            props.type === 'Experience' &&
            exIcons[props.index % exIcons.length]}
          {props.blank && (
            <FaPlus className='group-hover:animate-bounce text-[21px]' />
          )}
        </span>
      </div>
      {props.blank ? (
        <div className='history-text ml-[25px] group-hover:animate-pulse flex flex-col gap-[1vw]'>
          <Blank width='15vw' py='0.6vw' />
          <Blank width='5vw' py='0.2vw' />
          <div className='w-[360px]'>
            <Blank width='20vw' py='0.4vw' />
          </div>
        </div>
      ) : (
        <div className='history-text ml-[25px] group-hover:animate-pulse'>
          <h5 className='uppercase text-white'>{props.data.title}</h5>
          <span>{props.data.duration.join(' - ')}</span>
          <p
            className={
              wrap
                ? 'mb-0 whitespace-nowrap overflow-hidden text-ellipsis w-[360px]'
                : 'mb-0'
            }
          >
            {props.data.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default HistoryItem;
