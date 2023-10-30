import skillInfo from '../resources/json/about.json';

const getInitial = (val: number) => {
  const percent =
    val >= 70 && val < 75
      ? 'text-emerald-500'
      : val >= 75 && val < 80
      ? 'text-lime-500'
      : val >= 80 && val < 85
      ? 'text-amber-500'
      : val >= 85 && val < 90
      ? 'text-oragne-500'
      : val >= 90 && val < 95
      ? 'text-rose-600'
      : 'text-red-500';
  const bar =
    val >= 70 && val < 75
      ? '#d4e76bde'
      : val >= 75 && val < 80
      ? 'black'
      : val >= 80 && val < 85
      ? 'red'
      : val >= 85 && val < 90
      ? 'purple'
      : val >= 90 && val < 95
      ? 'blue'
      : '#fa6862';
  const style = { percent, bar };
  return style;
};

const getStyle = (index: number) => {
  const skill = skillInfo.skills[index];
  return getInitial(skill.value);
};

export default getStyle;
