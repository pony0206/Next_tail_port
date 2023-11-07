import Image from "next/image";
import Close from "../../components/close";
import HeaderTitle from "../../components/heading/HeaderTitle";
import HeaderWrapper from "../../components/heading/HeaderWrapper";
import Layout from "../../components/layout";
import ProfileBar from "../../components/welcome/profileBar";

import author from "../../images/gorner.png";

//import page data from json11  
import data from "../../resources/json/welcome.json";
const pingColors = [
  "animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-sky-400",
  "animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-white",
  "animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-pink-500",
];
const colors = [
  "relative inline-flex rounded-full h-3 w-3 bg-sky-500",
  "relative inline-flex rounded-full h-3 w-3 bg-white",
  "relative inline-flex rounded-full h-3 w-3 bg-pink-600",
];
const Welcome = () => {
  return (
    <Layout welcome>
      <Close />
      <div className="author-image-large static md:absolute right-[15vw] top-[4vw] scale-75 md:scale-100 w-fit h-fit mx-auto">
        <div className="border-white border-solid border-8 rounded-2xl drop-shadow-md hover:drop-shadow-xl  relative">
          <div className="blur-[2px] brightness-90 hover:blur-[0.5px]">
            <Image alt="Gorner" src={author} className="author" />
          </div>

          <div className="absolute bottom-[2vw] left-0 flex flex-col gap-3">
            {data.profile.map((one, index) => {
              return (
                <div key={index} className="flex justify-start">
                  <ProfileBar>
                    <span className="flex h-3 w-3">
                      <span className={pingColors[index]}></span>
                      <span className={colors[index]}></span>
                    </span>
                    {one}
                  </ProfileBar>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='container w-full sm:w-[750px] md:w-[970px] lg:w-full mx-auto before:table before:content-[""] after:table after:content-[""] after:clear-both'>
        <div className="w-full md:w-[50%] xl:w-[60%] float-left relative px-[15px]">
          <HeaderWrapper page="welcome" mb={75}>
            <HeaderTitle data={data.title} />
          </HeaderWrapper>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
