const Blank = (props: any) => {
  return (
    <div
      className='border-dashed border-2 border-opacity-60 rounded-full'
      style={{ width: props.width, padding: props.py + ' 0vw' }}
    />
  );
};

export default Blank;
