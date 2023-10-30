import getPattern from '../../helpers/makeCode';

const slideData = [
  <div
    key={1}
    className='code text-left text-[30px] transform scale-75 -rotate-[10deg] translate-x-[7.3vw] -translate-y-[1vw]'
  >
    <p className='text-[rgb(212,212,212)] flex gap-5'>
      1{getPattern('function', 'const')}
      {getPattern('fName', 'whyME')}
      <span>=</span>
      <span>():</span>
      {getPattern('type', 'string')}
      <span>{`=> {`}</span>
    </p>
    <p className='text-[rgb(212,212,212)] flex gap-5]'>
      <span className='mr-[80px]'>2</span>
      {/* border-l-solid border-l-2 border-l-[rgb(64,64,64) */}
      <span className='flex gap-5'>
        {getPattern('pink', 'return')}
        {getPattern('string', `BECAUSE I'm a experience web developer`)};
      </span>
    </p>
    <p>
      <span className='mr-[20px]'>3</span>
      {`};`}
    </p>
    <p>4</p>
    <p className='text-[rgb(212,212,212)] flex gap-5'>
      5{getPattern('pink', 'export')}
      {getPattern('pink', 'default')}
      <span>{getPattern('fName', 'whyME')};</span>
    </p>
  </div>,
  <div
    key={2}
    className='code text-left text-[30px] transform scale-75 -rotate-[10deg] translate-x-[7.3vw] -translate-y-[1vw]'
  >
    <p className='text-[rgb(212,212,212)] flex gap-5'>
      1{getPattern('function', 'const')}
      {getPattern('fName', 'whatYouLike')}
      <span>= (</span>
      <span>{getPattern('prop', 'type')}:</span>
      <span>{getPattern('type', 'string')})</span>
      <span>{`=> {`}</span>
    </p>
    <p className='text-[rgb(212,212,212)] flex gap-5]'>
      <span className='mr-[80px]'>2</span>
      {/* border-l-solid border-l-2 border-l-[rgb(64,64,64) */}
      <span className='flex gap-5'>
        {getPattern('pink', 'return')}
        {getPattern('string', `React + Typescript + Tailwind`)};
      </span>
    </p>
    <p>
      <span className='mr-[20px]'>3</span>
      {`};`}
    </p>
    <p>4</p>
    <p className='text-[rgb(212,212,212)] flex gap-5'>
      5{getPattern('pink', 'export')}
      {getPattern('pink', 'default')}
      <span>{getPattern('fName', 'whatYouLike')};</span>
    </p>
  </div>,
  <div
    key={3}
    className='code text-left text-[30px] transform scale-75 -rotate-[10deg] translate-x-[7.3vw] translate-y-[1vw]'
  >
    <p className='text-[rgb(212,212,212) flex'>
      <span className='mr-[20px]'>1</span>
      <span className='flex gap-5'>
        {getPattern('pink', 'export')}
        {getPattern('pink', 'default')}
        {getPattern('function', 'const')}
        {getPattern('fName', 'whyFreelancing')}
        <span>=</span>
        <span>():</span>
        {getPattern('type', 'string')}
        <span>{`=> {`}</span>
      </span>
    </p>
    <p className='text-[rgb(212,212,212)] flex gap-5'>
      <span className='mr-[80px]'>2</span>
      {/* border-l-solid border-l-2 border-l-[rgb(64,64,64) */}
      <span className='flex gap-5'>
        {getPattern('pink', 'return')}
        {getPattern('string', `I've no job yet :( Hire me!!!`)};
      </span>
    </p>
    <p>
      <span className='mr-[20px]'>3</span>
      {`};`}
    </p>
  </div>,
];

export default slideData;
