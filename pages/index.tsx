import type { NextPage } from "next";

import Layout from "../components/layout";

import { FaHome, FaUserCircle } from "react-icons/fa";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const data: Array<string> = [
    "welcome",
    "about",
    "services",
    "resume",
    "works",
    "testimonials",
    "contact",
  ];

  const clickHexagon = (target: string) => {
    router.push(target);
  };

  return (
    <Layout home>
      <div className='table-cell relative align-middle bg-cover bg-no-repeat bg-center bg-[url("../images/banner.jpg")] w-[100vw] h-[100vh] pt-[110px] sm:pt-0 pb-[60px] sm:pb-0'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#0e1118f7]" />
        <div className="container max-w-[1170px] w-full px-[15px] sm:w-[750px] mx-auto md:w-[970px] lg:w-[1170px]">
          <div className="relative min-h-[1px] pr-[15px] pl-[15px] w-full md:w-[83.33%] lg:w-2/3 md:ml-[8.333%] lg:ml-[16.667%]">
            <div className="mb-[75px] text-center ">
              <div className="Peter Gorner">
                <span className="signature text-[80px] text-orange-200 z-10">
                Peter Gorner
                </span>
              </div>

              <p className="text-[18px] mb-0 mt-[20px]">
                I am a highly motivated self-driven developer with over 6 years
                of experience in Web,Android and Blockchain technologies.
              </p>
            </div>
            <div className="hexagon-menu">
              {data.map((one, index) => {
                const fontIcons = [
                  <FaHome key={1} />,
                  <FaUserCircle key={2} />,
                  <FaHome key={3} />,
                  <FaHome key={4} />,
                  <FaHome key={5} />,
                  <FaHome key={6} />,
                  <FaHome key={7} />,
                ];
                const lastNames =
                  "hexagon-item group hover:z-[1] rotate(30deg) translate-x-0 translate-y-0 sm:translate-x-[115px] sm:-translate-y-[24px]";
                return (
                  <div
                    key={index}
                    onClick={(e) => clickHexagon(data[index])}
                    className={
                      index > data.length - 4
                        ? lastNames
                        : "hexagon-item group hover:z-[1]"
                    }
                  >
                    <div className="hex-item group-hover:scale-[1.2]">
                      <div className="hex-item-div item-first rotate-[0deg] before:transition-all before:duration-300] after:transition-all after:duration-300]"></div>
                      <div className="hex-item-div item-first rotate-[60deg] before:transition-all before:duration-300] after:transition-all after:duration-300]"></div>
                      <div className="hex-item-div item-first rotate-[120deg] before:transition-all before:duration-300] after:transition-all after:duration-300]"></div>
                    </div>
                    <div className="hex-item">
                      <div className="hex-item-div rotate-[0deg] before:transition-all before:duration-300] after:transition-all after:duration-300]"></div>
                      <div className="hex-item-div rotate-[60deg] before:transition-all before:duration-300] after:transition-all after:duration-300]"></div>
                      <div className="hex-item-div rotate-[120deg] before:transition-all before:duration-300] after:transition-all after:duration-300]"></div>
                    </div>
                    <div className="hover:animate-pulse mx-auto text-white block my-0 relative -rotate-[30deg] w-[156px] h-[180px]">
                      <span className="hex-content-inner left-[50%] top-[50%] mt-[3px] mr-[0px] mb-[0px] ml-[2px] absolute -translate-y-[60%] -translate-x-[50%] group-hover:text-[#FA6862]">
                        <span className="icon group-hover:animate-bounce leading-[30px] mb-[8px] flex justify-center text-[35px]">
                          {fontIcons[index]}
                        </span>
                        <span className="title bounce uppercase text-[18px] leading-[24px] tracking-[1px]">
                          {one}
                        </span>
                      </span>
                      <svg
                        className="-left-[7px] absolute -top-[13px] scale-[0.87] -z-[1] transition-all  ease-[cubic-bezier(0.165, 0.84, 0.44, 1) duration-300"
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
