import { Icon } from "@iconify/react";

const socialLink = [
  {
    icon: "akar-icons:facebook-fill",
    link: "",
  },
  {
    icon: "bi:github",
    link: "",
  },
];

const StudentProfileCard = ({ studentData }) => {
  const { name, courseOfStudy, description, imageURL } = studentData;

  const temp = { name, courseOfStudy, description, imageURL };

  for (let key in temp) {
    if (!temp[key]) throw new Error(`${key} is not defined.`);
  }

  return (
    <div className="overflow-hidden rounded-sm border  w-full bg-white">
      <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
        <div className="mt-4">
          <img
            className="w-32 object-cover rounded-full aspect-square mx-auto"
            src={imageURL}
            alt={name}
          />
          <h3 className="my-1.5 text-2xl font-semibold text-gray-900">
            {name}
          </h3>
          <p className="font-medium mb-2.5">{courseOfStudy}</p>

          <div className="mx-auto max-w-180">
            <h4 className="font-semibold text-black dark:text-white">
              About Me
            </h4>
            <p className="mt-4.5">{description}</p>
          </div>

          <div className="mt-6.5">
            <h4 className="mb-3.5 font-medium text-black dark:text-white">
              Follow me on
            </h4>
            <div className="flex items-center justify-center gap-3.5">
              {socialLink.map(({ icon }, key) => {
                return (
                  <Icon
                    key={key}
                    className="text-2xl text-gray-900 hover:text-blue-500 transition-all duration-300"
                    icon={icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileCard;
