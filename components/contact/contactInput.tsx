const ContactInput = (props: propsType) => {
  const makeInput = (
    type: string,
    placeholder?: any,
    onChange?: any,
    value?: any
  ) => {
    return type !== 'TEXTAREA' ? (
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className='rounded-sm pl-[70px] w-full h-[50px] bg-[#1e2530] text-[16px] outline-none'
        placeholder={placeholder}
        value={value}
        type={type === 'EMAIL' ? 'email' : 'text'}
        required={true}
      />
    ) : (
      <textarea
        className='rounded-sm pl-[70px] py-4 pr-4 w-full bg-[#1e2530] text-[16px] h-[120px]  outline-none'
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    );
  };
  return (
    <div
      className='relative mb-[10px]'
      style={{ width: props.widthPercent + '%' }}
    >
      <span className='absolute flex justify-center items-center top-0 left-0 w-[50px] h-[50px] border-r-[1px] border-r-[rgba(255,255,255,0.2)]'>
        {props.icon}
      </span>
      {makeInput(
        props.type ? props.type : 'other',
        props.placeholder,
        props.onChange,
        props.value ? props.value : ''
      )}
    </div>
  );
};

interface propsType {
  widthPercent?: number | 100;
  icon?: any | undefined;
  placeholder?: any | 'placeholder...';
  type?: string;
  onChange: any;
  value?: any;
}

export default ContactInput;
