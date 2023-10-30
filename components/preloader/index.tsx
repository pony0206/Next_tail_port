import { useEffect, useState } from 'react';
import useInterval from '../../hook/hookInterval';

const Preloader = (props: any) => {
  const [load, setLoad] = useState<number>(40);
  const delay = 10;

  useInterval(
    () => {
      // Your custom logic here
      setLoad(load - 1);
    },
    // Delay in milliseconds or null to stop it
    load >= -25 ? delay : null
  );

  useEffect(() => {
    load <= -25 && props.getReady(true);
  }, [load]);

  return (
    <div className={load >= -25 ? 'preloader' : 'preloader active'}>
      <div
        style={{ width: load / 2 + '%' }}
        className='loading-mask h-full left-0'
      ></div>
      <div
        style={{ width: (load + 6) / 2 + '%' }}
        className='loading-mask h-full left-[20%]'
      ></div>
      <div
        style={{ width: (load + 12) / 2 + '%' }}
        className='loading-mask h-full left-[40%]'
      ></div>
      <div
        style={{ width: (load + 18) / 2 + '%' }}
        className='loading-mask h-full left-[60%]'
      ></div>
      <div
        style={{ width: (load + 24) / 2 + '%' }}
        className='loading-mask h-full left-[80%]'
      ></div>
    </div>
  );
};

export default Preloader;
