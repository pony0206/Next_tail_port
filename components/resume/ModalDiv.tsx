const Line = (props: any) => {
  return (
    <div className='bg-white bg-opacity-70 text-slate-900 py-1 px-3 rounded-md text-[14px] w-full'>
      <div className='w-full'>{props.children}</div>
    </div>
  );
};
export default Line;
