import Image from "next/image";
import Layout from "../../components/layout";

import author from "../../images/gorner1.png";
import Close from "../../components/close";

import data from "../../resources/json/about.json";
import HeaderTitle from "../../components/heading/HeaderTitle";
import { FaSmileWink } from "react-icons/fa";
import HeaderWrapper from "../../components/heading/HeaderWrapper";

//import helpers

const getStyle = (val: number) => {
  const percent =
    val >= 70 && val < 75
      ? "text-emerald-500"
      : val > 75 && val <= 80
      ? "text-lime-500"
      : val > 80 && val <= 85
      ? "text-amber-500"
      : val > 85 && val <= 90
      ? "text-orange-400"
      : val > 90 && val <= 95
      ? "text-rose-500"
      : "text-red-600";
  const bar =
    val >= 70 && val < 75
      ? "bg-yellow-400 bar h-full rounded-lg"
      : val >= 75 && val < 80
      ? "bg-lime-400 bar h-full rounded-lg"
      : val >= 80 && val < 85
      ? "bg-green-600 bar h-full rounded-lg"
      : val >= 85 && val < 90
      ? "bg-emerald-400 bar h-full rounded-lg"
      : val >= 90 && val < 95
      ? "bg-sky-400 bar h-full rounded-lg"
      : "bg-blue-800 bar h-full rounded-lg";
  const style = { percent, bar };
  return style;
};

const About = () => {
  const skills = data.skills;
  skills.sort((a, b) => b.value - a.value);
  return (
    <Layout about>
      <Close />
      <div className="container w-full sm:w-[750px] md:w-[970px] lg:w-full mx-auto grid grid-cols-2 gap-5 px-4">
        <div className="col-span-2 float-left relative px-[15px] flex justify-center text-center">
          <HeaderWrapper mb={50}>
            <HeaderTitle data={data.title} />
          </HeaderWrapper>
        </div>
        <div className="col-span-2 md:col-span-1 float-left">
          <div className="about-author mb-[23px] items-center flex">
            <figure className="author-thumb bg-white border-[5px] border-solid border-[#1e2530] mr-[30px] w-[167px]">
              <div className="border-solid h-[149px] md:h-[131px] lg:h-[149px] border-black border-[2px] m-[4px]">
                <Image src={author} width={145} height={145} alt="author" />
              </div>
            </figure>
            <div className="author-desc text-white">
              <p>
                <b className="font-bold text-[17px]">Date of birth:</b>{" "}
                {data.profile.birthday}
              </p>
              <p>
                <b className="font-bold text-[17px]">Language:</b>{" "}
                {data.profile.language.join(", ")}
              </p>
              <p>
                <b className="font-bold text-[17px]">Expert in:</b>{" "}
                {data.profile.expertin.join(", ")}
              </p>
              <p className="flex items-center gap-1">
                <b>Freelance:</b>
                {data.profile.freelance}
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-sky-400"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
              </p>
            </div>
          </div>
          <p>{data.profile.content}</p>
        </div>
        <div className="col-span-2 md:col-span-1 float-left mt-[20px] md:mt-0">
          <div className="section-title clear mb-[20px] flex justify-between items-center">
            <h3 className="mSkill inline-block relative before:bg-white before:w-[96px] before:bottom-[15px] after:bg-[#FA6862] after:w-[73px] after:bottom-[8px] text-[24px] text-white">
              Skills
            </h3>
            <span className="cursor-pointer hover:text-white animate-pulse hover:animate-none">
              Click here to see his skills in detail...
            </span>
          </div>
          <div className="skill-wrapper gap-3 flex flex-col pb-[3.5vw] md:pb-0">
            {skills
              .filter((one) => one.tag.includes("LANDING"))
              .slice(0, 11)
              .map((skill, index) => {
                const style = getStyle(skill.value);

                return (
                  <div key={index} className={data.skillClass[index]}>
                    <div className="progress grid grid-cols-10 py-2 text-center bg-[#1e2530] rounded-[5px] text-[16px] text-[white] font-[350]">
                      <div className="skill-name col-span-3 border-r-2 border-[#2e333a]">
                        {skill.language}
                      </div>
                      <div className="skill-bar col-span-5 rounded-lg bg-black my-[7.5px] mx-[15px]">
                        <div
                          className={style.bar}
                          style={{ width: skill.value + "%" }}
                        ></div>
                      </div>
                      <div className="skill-lavel col-span-2 border-l-2 border-[#2e333a]">
                        {/* <span className={getStyle(index).percent}> */}
                        <span className={style.percent}>{skill.value}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
