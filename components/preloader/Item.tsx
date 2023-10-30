import { getItem, getCoreItem, getAroundItem } from '../../helpers/loderItem';

const Item = (props: any) => {
  const tempWidth = localStorage.getItem('width');
  const width = tempWidth ? parseInt(tempWidth) : 1600;
  if (props.type === 'NORMAL') {
    return (
      <span className='history-hex opacity-[0.1] text-[4.375vw] h-[5.39375vw] w-[9.375vw] relative bg-[#293342] my-[2.70625vw] before:bottom-[100%] before:border-b-[2.70625vw] before:border-b-[#293342] before:border-w-0 after:top-[100%] after:border-t-[2.70625vw] after:border-t-[#293342] after:border-w-0 after:w-0 flex justify-center items-center before:border-x-[4.6875vw] after:border-x-[4.6875vw]'>
        {getItem(props.index)}
      </span>
    );
  }
  if (props.type === 'CENTER') {
    return (
      <span className='history-hex opacity-80 text-[4.375vw] h-[5.39375vw] w-[9.375vw] relative bg-[#293342] my-[2.70625vw] before:bottom-[100%] before:border-b-[2.70625vw] before:border-b-[#293342] before:border-w-0 after:top-[100%] after:border-t-[2.70625vw] after:border-t-[#293342] after:border-w-0 after:w-0 flex justify-center items-center before:border-x-[4.6875vw] after:border-x-[4.6875vw]'>
        {getCoreItem(width)}
      </span>
    );
  }
  return (
    <div>
      <span className='history-hex opacity-30 text-red-400 text-[4.375vw] h-[5.39375vw] w-[9.375vw] relative bg-[#293342] my-[2.70625vw] before:bottom-[100%] before:border-b-[2.70625vw] before:border-b-[#293342] before:border-w-0 after:top-[100%] after:border-t-[2.70625vw] after:border-t-[#293342] after:border-w-0 after:w-0 flex justify-center items-center before:border-x-[4.6875vw] after:border-x-[4.6875vw]'>
        {getAroundItem(props.type, width)}
      </span>
    </div>
  );
};

export default Item;
