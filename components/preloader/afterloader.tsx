import Item from '../preloader/Item';
import option from '../../resources/data/afterload';

const rows = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const getRadom = (array: any) => {
  return array[Math.floor(Math.random() * array.length)];
};

const opacityClass = (index: number) => {
  let names = [
    'opacity-100',
    'opacity-90',
    'opacity-80',
    'opacity-70',
    'opacity-60',
    'opacity-50',
    'opacity-40',
    'opacity-30',
    'opacity-20',
    'opacity-10',
    'opacity-50',
  ];
  return names[index];
};

const FantasyLoader = (props: any) => {
  return (
    <div className='w-full h-full top-0 left-0 absolute table'>
      <div className='w-full flex flex-wrap'>
        <div className={getRadom(option.colors)}>
          {rows.slice(0, 10).map((row, rindex) => {
            const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            return (
              <div
                key={rindex}
                className='flex gap-[1vw] -mt-[1.9vw] first:-mt-[7.5vw] even:-ml-[5.15vw]'
              >
                {cols.map((col, cindex) => {
                  if (rindex === 2 && cindex === 4) {
                    return <Item key={cindex} type='REACT' />;
                  }
                  if (rindex === 2 && cindex === 5) {
                    return <Item key={cindex} type='TAILWIND' />;
                  }
                  if (rindex === 3 && cindex === 4) {
                    return <Item key={cindex} type='REDUX' />;
                  }
                  if (rindex === 3 && cindex === 5) {
                    return <Item key={cindex} type='CENTER' />;
                  }
                  if (rindex === 3 && cindex === 6) {
                    return <Item key={cindex} type='NODEJS' />;
                  }
                  if (rindex === 4 && cindex === 5) {
                    return <Item key={cindex} type='JQUERY' />;
                  }
                  if (rindex === 4 && cindex === 4) {
                    return <Item key={cindex} type='ANGULAR' />;
                  }
                  return (
                    <div className={opacityClass(rindex)} key={cindex}>
                      <Item index={cindex} type='NORMAL' />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FantasyLoader;
