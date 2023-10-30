import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import {
  FaEnvelopeOpen,
  FaPencilAlt,
  FaQuestion,
  FaUser,
} from "react-icons/fa";
import Close from "../../components/close";
import ContactBlock from "../../components/contact/contactBlock";
import ContactInput from "../../components/contact/contactInput";
import Footer from "../../components/footer";
import SpecialHeading from "../../components/heading/SpecialHeading";
import Title from "../../components/heading/Title";
import TitleText from "../../components/heading/TitleText";
import Layout from "../../components/layout";

//import email config
import config from "../../config";

import data from "../../resources/json/contact.json";
import HeaderTitle from "../../components/heading/HeaderTitle";
import HeaderWrapper from "../../components/heading/HeaderWrapper";

const Contact = () => {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [title, setTitle] = useState<String>("");
  const [message, setMessage] = useState<String>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let totalMessage = title.toString() + message.toString();
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Borys Solovei",
      message: totalMessage,
    };
    emailjs
      .send(
        config.NEXT_PUBLIC_SERVICE_ID,
        config.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        config.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((result: any) => {
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
      });
  };
  return (
    <Layout contact>
      <Close />
      <div className="container w-full sm:w-[750px] md:w-[970px] lg:w-[1170px] px-[20px] mx-auto grid gap-5 mb-8">
        <div className="float-left relative px-[15px] flex justify-center text-center">
          <HeaderWrapper mb={20}>
            <HeaderTitle data={data.title} />
          </HeaderWrapper>
        </div>
        <div className="contact flex flex-col md:flex-row">
          <div className="w-full md:w-[40%] pl-6 md:pl-0">
            {data.contact.map((one: any, index: number) => {
              return (
                <ContactBlock key={index} type={one.type} value={one.value} />
              );
            })}
          </div>
          <form className="w-full md:w-[60%]">
            <SpecialHeading mb={20}>Send me a message</SpecialHeading>
            <div className="flex gap-2">
              <ContactInput
                value={name}
                onChange={(value: string) => setName(value)}
                widthPercent={50}
                icon={<FaUser />}
                placeholder="Input your name"
              />
              <ContactInput
                value={email}
                onChange={(value: string) => setEmail(value)}
                widthPercent={50}
                icon={<FaEnvelopeOpen />}
                type="EMAIL"
                placeholder="Your email address"
              />
            </div>
            <ContactInput
              value={title}
              onChange={(value: string) => setTitle(value)}
              icon={<FaQuestion />}
              placeholder="Write your discussion title"
            />
            <ContactInput
              value={message}
              onChange={(value: string) => setMessage(value)}
              icon={<FaPencilAlt />}
              type="TEXTAREA"
            />
            <div className="flex justify-center md:justify-start w-full h-[60px]">
              <div className="w-[220px] h-full border-[1px] border-[#d7d8db] p-2 border-opacity-30">
                <button
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  className="w-full h-full bg-[#FA6862] rounded-sm hover:bg-[#cc3e39] uppercase text-[13px] text-white font-bold"
                >
                  Send message now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
