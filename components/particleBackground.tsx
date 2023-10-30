import Particles from 'react-tsparticles';
import option from '../resources/data/particleOption';
const Background = () => {
  return (
    <div>
      <Particles id='tsparticles' options={option} />
    </div>
  );
};
export default Background;