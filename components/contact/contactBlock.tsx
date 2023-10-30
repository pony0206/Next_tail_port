import {
  FaEnvelope,
  FaGithub,
  FaGithubAlt,
  FaTelegram,
  FaSkype,
  FaLinkedin,
} from "react-icons/fa";

const ContactBlock = ({ type, value }: propsType) => {
  console.log(new Date().getDate());
  const FontIcons = {
    email: <FaEnvelope />,
    telegram: <FaTelegram />,
    skype: <FaSkype />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />
  };
  var date = new Date();
  return (
    <div className="contact-block mb-[25px] flex items-center gap-9">
      <div className="text-[45px]">
        {type === "email" && FontIcons.email}
        {type === "telegram" && FontIcons.telegram}
        {type === "skype" && FontIcons.skype}
        {type === "linkedin" && FontIcons.linkedin}
        {type === "github" &&
          FontIcons.github}
      </div>

      <div>
        <h2 className="text-white text-[18px] uppercase">
          {type}
        </h2>
        <p>
          {value}
        </p>
      </div>
    </div>
  );
};

interface propsType {
  type: string;
  value: string;
}

export default ContactBlock;
