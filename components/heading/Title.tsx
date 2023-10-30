const Title = (props: any) => {
  return (
    <h2 className='text-white text-[60px] sm:text-[55px] md:text-[68px] mb-[25px] relative z-0 font-black uppercase'>
      {props.data.first}{' '}
      <span className='primary text-[#FA6862]'>{props.data.last}</span>
      <span className='title-bg animate-pulse text-[#46587c1f] text-[9.875vw] left-[0%] tracking-[10px] leading-[0.7] absolute right-0 top-[50%] -z-[1] -translate-y-[50%]'>
        {props.data.back}
      </span>
    </h2>
  );
};

export default Title;
