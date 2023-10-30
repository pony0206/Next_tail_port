const Ping = (index: any) => {
  const pingColors = [
    'animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-[rgb(56,189,248)]',
    'animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-[rgb(107,33,168)]',
    'animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-[rgb(236,72,153)]',
  ];
  const colors = [
    'relative inline-flex rounded-full h-3 w-3 bg-[rgb(14,165,233)]',
    'relative inline-flex rounded-full h-3 w-3 bg-[rgb(88,28,135)]',
    'relative inline-flex rounded-full h-3 w-3 bg-[rgb(219,39,119)]',
  ];
  return (
    <span className='flex h-3 w-3'>
      <span className={pingColors[index]}></span>
      <span className={colors[index]}></span>
    </span>
  );
};

export default Ping;
