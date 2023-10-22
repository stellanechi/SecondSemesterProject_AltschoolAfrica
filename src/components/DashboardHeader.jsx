import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import routes from "../navigation/routes";
import useAuthentication from "../hooks/useAuthentication";

const DashboardHeader = ({ onHamburgerClick }) => {
  // CUSTOM HOOK FOR GETTING THE LOGGED IN USER
  const { email } = useAuthentication();

  return (
    <header className="flex sticky top-0  bg-zinc-100 items-center p-3 shadow-lg justify-between md:justify-end">
      <Icon
        onClick={onHamburgerClick}
        className="text-2xl md:hidden cursor-pointer hover:text-blue-500 text-gray-700"
        icon="ci:hamburger-lg"
      />

      <Link
        className="flex text-sm font-semibold hover:text-blue-500 duration-300 transition-all text-gray-700  tracking-wider items-center gap-2"
        to={routes.PROFILE_PAGE}
      >
        <Icon className="text-2xl " icon="mingcute:user-4-line" />
        {email}
      </Link>
    </header>
  );
};

export default DashboardHeader;
