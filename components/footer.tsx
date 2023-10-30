import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Footer = (props: any) => {
  const [focus, setFocus] = useState<Boolean>(false);
  const [width, setWidth] = useState(1600);

  useEffect(
    function mount() {
      const tempWidth = localStorage.getItem('width');
      const parsedWidth = tempWidth ? parseInt(tempWidth) : 1600;
      setWidth(parsedWidth);
    },
    [width]
  );

  const blackBar = useRef<HTMLDivElement>(null);
  const onEnter = async () => {
    setFocus(true);
    await blackBar.current?.animate(
      [{ width: '47px' }, { width: (width * 0.9) / 16 + 'vw' }],
      {
        duration: 200,
      }
    );
    blackBar.current?.setAttribute(
      'class',
      'flex items-center cursor-pointer px-[15px] mx-auto w-[90vw] p-[10px] rounded-[1000px] bg-[#000000c4] min-h-[47px] max-h-[47px] h-[47px]'
    );
  };

  const onBlur = async () => {
    setFocus(false);
    await blackBar.current?.animate(
      [{ width: (width * 0.9) / 16 + 'vw' }, { width: '47px' }],
      {
        duration: 200,
      }
    );
    blackBar.current?.setAttribute(
      'class',
      'flex items-center cursor-pointer px-[15px] mx-auto p-[10px] rounded-[1000px] bg-[#000000c4] min-h-[47px] max-h-[47px] h-[47px]'
    );
  };

  return (
    <nav
      className='z-[100] animate-bounce group pageNav clear animate-pulse hover:animate-none absolute bottom-[20px] overflow-hidden left-0 right-0 before:table before:content-[""] after:table after:content-[""] after:clear-both grid grid-cols-1'
      onMouseEnter={onEnter}
      onMouseLeave={onBlur}
    >
      {/* hover:px-[50px] */}
      <div
        ref={blackBar}
        className='flex items-center hover:items-start cursor-pointer px-[15px] transition duration-500 ease-in-out mx-[auto] p-[10px] rounded-[1000px] hover:rounded-xl bg-[#000000c4] min-h-[47px] max-h-[47px] h-[47px]'
      >
        <div className='group-hover:hidden'>
          <FaArrowDown />
        </div>
        <div className='max-w-[1170px] w-full mx-auto hidden opacity-0 group-hover:block group-hover:opacity-100'>
          {/* group */}
          <div className='flex flex-middle justify-between'>
            <span className='prev-page hover:text-white'>
              <Link href={props.prev ? '/' + props.prev : '/'}>
                <a className='link'>← Prev Page</a>
              </Link>
            </span>
            <span className='copyright sm:visible'>
              2017 - {new Date().getFullYear()}
            </span>
            {!props.last ? (
              <span className='next-page'>
                <Link href={'/' + props.next}>
                  <a className='link hover:text-white'>Next Page →</a>
                </Link>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
