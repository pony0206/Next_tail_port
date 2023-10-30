const SpecialHeading = ({ children, mb }: propsType) => {
  return (
    <h3
      className='mSkill inline-block relative before:bg-white before:w-[96px] before:bottom-[15px] after:bg-[#FA6862] after:w-[73px] after:bottom-[8px] text-[24px] text-white'
      style={{ marginBottom: mb + 'px' }}
    >
      {children}
    </h3>
  );
};

interface propsType {
  children: any;
  mb?: number;
}

export default SpecialHeading;
