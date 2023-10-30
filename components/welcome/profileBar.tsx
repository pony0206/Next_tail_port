const ProfileBar = (props: any) => {
  return (
    <p className='px-[20px] py-[4px] bg-blur-[20px] bg-opacity-70 bg-black rounded-r-full text-gray-200 flex w-fit items-center gap-2 float-right'>
      {props.children}
    </p>
  );
};

export default ProfileBar;
