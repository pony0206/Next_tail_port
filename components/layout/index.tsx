import Head from 'next/head';
import { Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';

import Item from '../preloader/Item';

import Footer from '../footer';
import Background from '../particleBackground';

import links from '../../resources/json/navInfo.json';

import option from '../../resources/data/afterload';
import FantasyLoader from '../preloader/afterloader';
import { FaSpinner } from 'react-icons/fa';

const getRadom = (array: any) => {
  return array[Math.floor(Math.random() * array.length)];
};

const Layout = (props: any) => {
  const rows = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  const [row, setRow] = useState(10);
  const [ready, setReady] = useState('NONE');
  const [loading, setLoading] = useState('NONE');

  const router = useRouter();

  const header = (
    <Head>
      <title>Smart Dev</title>
      <meta name='description' content='Web Developer' />
      <meta name='og:title' content='Full Stack Dev Resume' />
      <meta name='twitter:card' content='Web Developer' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
  let screenWidth: any;

  var link =
    (props.home && links.home) ||
    (props.welcome && links.welcome) ||
    (props.about && links.about) ||
    (props.services && links.services) ||
    (props.resume && links.resume) ||
    (props.works && links.works) ||
    (props.testimonials && links.testimonials) ||
    (props.contact && links.contact);

  useEffect(function mount() {
    localStorage.setItem('width', window.innerWidth.toString());
    screenWidth = window.innerWidth;

    setLoading('LOADING');

    // window.onkeydown = (e) => {
    //   e.code === 'F12' && e.preventDefault();
    // };
  }, []);

  return (
    <div className='layout'>
      {props.home && ready && <Background />}
      {/* {props.home && ready && <Background />} */}
      {header}
      <div className='text-[#ababab] bg-[#0c0f15] overflow-y-scroll overflow-x-hidden md:overflow-hidden h-[100vh] '>
        <main className='border-t-4 border-[#FA6862] font-medium leading-normal text-[#ababab]'>
          <div className='w-full fill-height table relative'>
            <Transition
              show={loading !== 'NONE'}
              enter='transform transition duration-[500ms]'
              enterFrom={getRadom(option.enterFrom)}
              enterTo='opacity-100 rotate-0 scale-100'
              leave='transform transition duration-[800ms] duration-[500ms]'
              leaveFrom='opacity-50 rotate-0'
              leaveTo={getRadom(option.leaveTo)}
              afterEnter={() => {
                ready === 'NONE' && setTimeout(() => setReady('READY'), 1000);
                loading === 'UNLOADING' &&
                  ready === 'PREV' &&
                  router.push(link[0]);
                loading === 'UNLOADING' &&
                  ready === 'NEXT' &&
                  router.push(link[1]);
              }}
              // beforeLeave={() => setReady(true)}
            >
              <FantasyLoader />
            </Transition>
            {/* {ready && <FantasyLoader />} */}

            <Transition
              show={ready === 'READY'}
              enter='transform transition duration-[500ms] delay-[300ms]'
              enterFrom='opacity-0 scale-[0.7]'
              enterTo='opacity-100 rotate-0 scale-100'
              leave='transform transition duration-[500ms]'
              leaveFrom='opacity-100 rotate-0 scale-100 '
              leaveTo='opacity-0 scale-[0.8]'
              beforeEnter={() => {
                loading === 'LOADING' && setLoading('NONE');
              }}
              afterLeave={() => setLoading('UNLOADING')}
            >
              <div className='table-cell align-middle relative page-about w-[100vw] h-[100vh] pb-[60px] md:pb-0 pt-[50px] md:pt-0 cursor-default'>
                {props.children}
              </div>
            </Transition>
          </div>
        </main>
        {/* <Footer next={link[1]} prev={link[0]} /> */}
      </div>
      {loading !== 'NONE' && (
        <div className='w-full absolute bottom-3  z-10 flex justify-center'>
          <div className='bg-black animate-spin text-white bg-opacity-70 p-[20px] rounded-full flex justify-between items-center'>
            <FaSpinner />
          </div>
        </div>
      )}
      {loading !== 'LOADING' && ready === 'READY' && (
        <div className='px-[5vw] w-[100vw] absolute bottom-3 text-[#ababab] text-[16px] z-10'>
          <div className='bg-black animate-pulse hover:animate-none bg-opacity-70 w-full h-[40px] rounded-3xl flex justify-between items-center px-[2vw]'>
            <span
              className='prev-page hover:text-white cursor-pointer'
              onClick={() => link[0] !== null && setReady('PREV')}
            >
              ← Prev Page
            </span>
            <span className='copyright'>
              2017 - {new Date().getFullYear()}
              <span className='invisible sm:visible pl-2'>
                Full-Stack Web Developer, Freelancing
              </span>
            </span>
            <span
              className='next-page hover:text-white cursor-pointer'
              onClick={() => link[1] !== null && setReady('NEXT')}
            >
              Next Page →
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
