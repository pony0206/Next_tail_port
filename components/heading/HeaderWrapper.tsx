const HeaderWrapper = (props: any) => {
  return (
    <div
      className='page-title w-full sm:w-[80%] lg:w-[80.67%]'
      style={{ marginBottom: props.mb ? props.mb + 'px' : '0px' }}
    >
      {props.children}
    </div>
  );
};

export default HeaderWrapper;
