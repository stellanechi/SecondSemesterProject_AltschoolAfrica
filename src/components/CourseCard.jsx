import { Icon } from "@iconify/react";
import GraduationCap from "../assets/GraduationCap";

const CourseCard = ({ name, averageTime, price, description }) => {
  return (
    <div className="bg-slate-50 flex flex-col items-start p-5 rounded-xl">
      <span className="p-2 bg-blue-400 bg-opacity-20 text-3xl block rounded-full">
        <GraduationCap />
      </span>

      <h3 className="font-bold my-5">{name}</h3>

      <p className="text-sm mb-5 flex-1">{description}</p>

      <div className="flex items-center w-full justify-between">
        <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-neutral-300 text-xs font-medium">
          <Icon icon="ph:clock" />
          <p>{averageTime}</p>
        </span>

        <data className="font-bold text-sm md:text-base">$ {price}</data>
      </div>
    </div>
  );
};

export default CourseCard;
