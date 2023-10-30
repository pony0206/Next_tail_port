import Image from 'next/image';

import {
  FaAmazon,
  FaAngular,
  FaAppleAlt,
  FaAtom,
  FaBehance,
  FaBitbucket,
  FaBootstrap,
  FaConfluence,
  FaCss3Alt,
  FaDocker,
  FaDrupal,
  FaEmber,
  FaErlang,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaGitkraken,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaravel,
  FaLess,
  FaMeteor,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaRedhat,
  FaSass,
  FaSketch,
  FaSlack,
  FaSourcetree,
  FaSwift,
  FaSymfony,
  FaUbuntu,
  FaVuejs,
  FaWordpress,
  FaYarn,
} from 'react-icons/fa';

const LoaderItem: any = [
  <FaLaravel />,
  <FaBootstrap />,
  <FaAmazon />,
  <FaAppleAlt />,
  <FaCss3Alt />,
  <FaDocker />,
  <FaDrupal />,
  <FaGit />,
  <FaGitAlt />,
  <FaGithub />,
  <FaGitlab />,
  <FaHtml5 />,
  <FaJava />,
  <FaJs />,
  <FaPhp />,
  <FaPython />,
  <FaRedhat />,
  <FaSass />,
  <FaSwift />,
  <FaSymfony />,
  <FaUbuntu />,
  <FaWordpress />,
  <FaYarn />,
  <FaAtom />,
  <FaBehance />,
  <FaBitbucket />,
  <FaConfluence />,
  <FaEmber />,
  <FaErlang />,
  <FaGitkraken />,
  <FaLess />,
  <FaMeteor />,
  <FaSketch />,
  <FaSlack />,
  <FaSourcetree />,
  <FaYarn />,
];

//import core svg images
import NextSvg from '../images/devicon/core/next.svg';
import Tailwind from '../images/devicon/core/tailwind.svg';
import Redux from '../images/devicon/core/redux.svg';
import Jquery from '../images/devicon/core/jquery.svg';

//import other images
import img1 from '../images/devicon/1.svg';
import img2 from '../images/devicon/2.svg';
import img3 from '../images/devicon/3.svg';
import img4 from '../images/devicon/4.svg';
import img5 from '../images/devicon/5.svg';
import img6 from '../images/devicon/6.svg';
import img7 from '../images/devicon/7.svg';
import img8 from '../images/devicon/8.svg';
import img9 from '../images/devicon/9.svg';
import img10 from '../images/devicon/10.svg';
import img11 from '../images/devicon/11.svg';
import img12 from '../images/devicon/12.svg';
import img13 from '../images/devicon/13.svg';
import img14 from '../images/devicon/14.svg';
import img15 from '../images/devicon/15.svg';
import img16 from '../images/devicon/16.svg';
import img17 from '../images/devicon/17.svg';
import img18 from '../images/devicon/18.svg';
import img19 from '../images/devicon/19.svg';
import img20 from '../images/devicon/20.svg';
import img21 from '../images/devicon/21.svg';
import img22 from '../images/devicon/22.svg';
import img23 from '../images/devicon/23.svg';
import img24 from '../images/devicon/24.svg';
import img25 from '../images/devicon/25.svg';
import img26 from '../images/devicon/26.svg';
import img27 from '../images/devicon/27.svg';
import img28 from '../images/devicon/28.svg';
import img29 from '../images/devicon/29.svg';
import img30 from '../images/devicon/30.svg';

const otherImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
];

const getItem = (index: any) => {
  let shuffled = LoaderItem.map((a: any) => ({ sort: Math.random(), value: a }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map((a: any) => a.value);
  return shuffled[index];
};

// const cwidth = ((80 * window.innerWidth) / 1600).toFixed(0);

// console.log(cwidth);
const getCoreItem = (width: any) => {
  var cwidth = ((80 * width) / 1600).toFixed(0);
  return (
    <Image src={NextSvg} width={parseInt(cwidth)} height={parseInt(cwidth)} />
  );
};

// const getCoreItem = () => <NextSvg width={100} height={100} fill={'red'} />;

const getAroundItem = (type: any, width: any) => {
  var cwidth = ((90 * width) / 1600).toFixed(0);
  var reduxWidth = ((70 * width) / 1600).toFixed(0);
  switch (type) {
    case 'REACT':
      return <FaReact />;
    case 'TAILWIND':
      return (
        <Image
          src={Tailwind}
          width={parseInt(cwidth)}
          height={parseInt(cwidth)}
        />
      );
    case 'REDUX':
      return (
        <Image
          src={Redux}
          width={parseInt(reduxWidth)}
          height={parseInt(reduxWidth)}
        />
      );
    case 'JQUERY':
      return (
        <Image
          priority
          src={Jquery}
          width={parseInt(cwidth)}
          height={parseInt(cwidth)}
        />
      );
    case 'NODEJS':
      return <FaNodeJs />;
    case 'ANGULAR':
      return <FaAngular />;
    case 'VUE':
      return <FaVuejs />;
  }
};

const getOddItem = (index: any) => {
  // console.log(otherImages);
  let shuffled = otherImages
    .map((a: any) => ({ sort: Math.random(), value: a }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map((a: any) => a.value);
  return <Image src={shuffled[index]} width={80} height={80} />;
};

export { getCoreItem, getAroundItem, getItem, getOddItem };
