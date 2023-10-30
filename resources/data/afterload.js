const colors = [
  'overflow-hidden -ml-[1vw] text-[#df4646cc]',
  'overflow-hidden -ml-[1vw] text-[#8066d1cc]',
  'overflow-hidden -ml-[1vw] text-[#d166c9cc]',
  'overflow-hidden -ml-[1vw] text-[#66c7d1cc]',
  'overflow-hidden -ml-[1vw] text-[#d16692cc]',
  'overflow-hidden -ml-[1vw] text-[#a3d1669e]',
  'overflow-hidden -ml-[1vw] text-[#d97647d1]',
  'overflow-hidden -ml-[1vw] text-[#c18bcbd1]',
  'overflow-hidden -ml-[1vw] text-[#ffffffc9]',
];
const enterFrom = [
  'opacity-0 scale-100 rotate-[-10deg]',
  'opacity-0 scale-100 rotate-[-20deg]',
  'opacity-0 scale-100 rotate-[-40deg]',
  'opacity-0 scale-100 rotate-[-60deg]',
  'opacity-0 scale-100 rotate-[0deg]',
  'opacity-0 scale-100 rotate-[10deg]',
  'opacity-0 scale-100 rotate-[20deg]',
];

const leaveTo = [
  'opacity-0 scale-150 rotate-[-5deg]',
  'opacity-0 scale-150 rotate-[-5deg]',
  'opacity-0 scale-150 rotate-[-10deg]',
  'opacity-0 scale-150 rotate-[5deg]',
  'opacity-0 scale-150 rotate-[10deg]',
  'opacity-0 scale-150 rotate-[0deg]',
];

const option = {
  colors,
  enterFrom,
  leaveTo,
};

export default option;
