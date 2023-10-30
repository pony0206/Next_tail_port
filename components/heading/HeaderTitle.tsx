import Title from './Title';
import TitleText from './TitleText';

const HeaderTitle = (props: any) => {
  return (
    <>
      <Title data={props.data}></Title>
      {props.data.content.map((one: any, index: number) => {
        return <TitleText key={index} data={one} />;
      })}
    </>
  );
};

export default HeaderTitle;
