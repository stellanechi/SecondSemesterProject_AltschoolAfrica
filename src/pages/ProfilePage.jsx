import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import StelleEnehPicture from "../assets/stella-eneh.png";

const socialLink = [
  {
    icon: "akar-icons:facebook-fill",
    link: "https://web.facebook.com/stella.eneh.1",
  },
  {
    icon: "bi:github",
    link: "https://github.com/stellanechi",
  },
  {
    icon: "ri:twitter-x-fill",
    link: "https://github.com/stellanechi",
  },
];

const ProfilePage = () => {
  return (
    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
        <div className="mt-4">
          <img
            className="w-32 object-cover rounded-full aspect-square mx-auto"
            src={StelleEnehPicture}
            alt="Stella Eneh"
          />
          <h3 className="my-1.5 text-2xl font-semibold text-gray-900">
            Stella Eneh
          </h3>
          <p className="font-medium mb-2.5">Front-end developer.</p>
          <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
              <span className="font-semibold text-black dark:text-white">
                259
              </span>
              <span className=" text-black dark:text-white text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
              <span className="font-semibold text-black dark:text-white">
                129K
              </span>
              <span className=" text-black dark:text-white text-sm">
                Followers
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
              <span className="font-semibold text-black dark:text-white">
                3K
              </span>
              <span className=" text-black dark:text-white text-sm">
                Following
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-180">
            <h4 className="font-semibold text-black dark:text-white">
              About Me
            </h4>
            <p className="mt-4.5">
              Hi, I’m Eneh Stella Nkechi, I’m interested in Front End
              Engineering, I’m open to Internship opportunities and other
              front-end opportunities you can reach me via the links below.{" "}
            </p>
          </div>

          <div className="mt-6.5">
            <h4 className="mb-3.5 font-medium text-black dark:text-white"> 
              Follow me on
            </h4>
            <div className="flex items-center justify-center gap-3.5">
              {socialLink.map(({ icon, link }, key) => {
                return (
                  <Link target="_blank" to={link} key={key}>
                    <Icon
                      className="text-2xl text-gray-900 hover:text-blue-500 transition-all duration-300"
                      icon={icon}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
