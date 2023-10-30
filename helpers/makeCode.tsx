const getPattern = (type: string, value: any) => {
  switch (type) {
    case 'normal':
      return <span style={{ color: 'rgb(212,212,212)' }}> </span>;
    case 'function':
      return <span style={{ color: 'rgb(86,156,214)' }}>{value}</span>;
    case 'fName':
      return <span style={{ color: 'rgb(220,220,170)' }}>{value}</span>;
    case 'type':
      return <span style={{ color: 'rgb(78,201,176)' }}>{value}</span>;
    case 'string':
      return (
        <span style={{ color: 'rgb(206,145,120)' }}>{`'` + value + `'`}</span>
      );
    case 'pink':
      return <span style={{ color: 'rgb(197,134,192)' }}>{value}</span>;
    case 'prop':
      return <span style={{ color: 'rgb(156,220,254)' }}>{type}</span>;
  }
};

export default getPattern;
