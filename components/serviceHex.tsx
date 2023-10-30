const ServiceHex = (props: any) => {
  const timeFunc = 'ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]';
  return (
    <div className='service-hex float-left relative w-[180px] z-[1] hover:z-[2] group cursor-pointer'>
      <svg
        className='scale-[1.08] overflow-hidden group-hover:scale-[1.5] transition-all duration-[400ms] ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        // xmlns:xlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 372 424.5'
        // style='enable-background:new 0 0 372 424.5;'
        // xml:space='preserve'
      >
        <g>
          <polygon
            className='st0 fill-transparent group-hover:fill-white stroke-[#1e2530] transition-all duration-[400ms] ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]'
            points='359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4'
          ></polygon>
          <polygon
            className='st1 fill-[#1e2530] stroke-[#1e2530] group-hover:fill-[#FA6862] group-hover:stroke-transparent'
            points='331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131'
          ></polygon>
        </g>
      </svg>

      <div className='content group-hover:w-[135%] text-white left-[50%] absolute text-center top-[50%] w-full -translate-x-[50%] -translate-y-[50%]'>
        <div className='icon text-[30px] mb-[9px]'>
          <i className='et-line icon-lightbulb'></i>
        </div>
        <h4 className='text-[16px] mb-2'>{props.data.title}</h4>
        <p className='text-[14px] leading-6 overflow-hidden h-0 group-hover:h-[72px] px-4 transition-all duration-[400ms] ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]'>
          {props.data.content}
        </p>
      </div>
    </div>
  );
};

export default ServiceHex;
