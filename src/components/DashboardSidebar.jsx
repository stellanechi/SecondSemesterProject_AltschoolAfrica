import { Icon } from "@iconify/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import routes from "../navigation/routes";
import { EMAIL_LOCAL_STORAGE_KEY } from "../config";

const navlinks = [
  {
    name: "Dashboard",
    icon: "material-symbols:dashboard",
    link: routes.DASHBOARD_PAGE,
  },
  {
    name: "Error Boundary",
    icon: "mdi:error-outline",
    link: routes.ERROR_BOUNDARY,
  },
  {
    name: "My Profile",
    icon: "mingcute:user-4-line",
    link: routes.PROFILE_PAGE,
  },
];

const DashboardSidebar = ({
  isDashboardSidebarOpened,
  setIsDashboardSidebarOpened,
}) => {
  const [activeRoute, setActiveRoute] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    navlinks.forEach(({ name, link }) => {
      if (pathname === link) {
        setActiveRoute(name);
      }
    });
  }, [pathname]);

  const handleLogout = () => {
    // CLEAR THE LOCAL STORAGE
    localStorage.removeItem(EMAIL_LOCAL_STORAGE_KEY);

    // NAVIGATE THE USER TO LOGIN SCREEN
    navigate(routes.LOGIN_PAGE, { replace: true });
  };

  const handleClose = () => {
    setIsDashboardSidebarOpened((prev) => !prev);
  };

  return (
    <>
      <aside
        className={`fixed top-0 z-30 h-full rounded-r-xl bg-appPurple100  flex-shrink-0  text-white shadow-sideBarShadow transition-all duration-300 md:sticky md:block md:translate-x-0 ${
          isDashboardSidebarOpened ? " translate-x-0 " : "-translate-x-full"
        } `}
      >
        <div className="bg-blue-950 p-5 flex overscroll-y-auto  z-10 min-h-screen flex-col text-gray-100">
          {/* TODO MAKE THE ICON RIGHT ALIGNED */}
          <div className="flex gap-5 w-max justify-between items-center">
            <h2 className="font-semibold bg-blue-900 p-3 rounded-2xl shadow-blue-900 shadow-md ring-blue-800 ring font-mono text-lg">
              Stella's <br /> Academy <br /> EduPortal
            </h2>

            <Icon
              onClick={handleClose}
              className="text-xl hover:text-yellow-500 md:hidden transition-all duration-300 cursor-pointer"
              icon="zondicons:close-outline"
            />
          </div>

          <ul className="py-10 flex flex-col gap-7">
            {navlinks.map((value, index) => {
              return (
                <li key={index}>
                  <Link
                    to={value.link}
                    className={`text-gray-200 gap-3 w-max hover:bg-blue-500 transition-all duration-300  px-3 py-2 rounded-xl flex items-center ${
                      activeRoute === value.name
                        ? " bg-blue-500"
                        : " bg-slate-200 bg-opacity-10 "
                    }`}
                  >
                    <Icon icon={value.icon} />
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr className="border-zinc-400" />
          <button
            type="button"
            onClick={handleLogout}
            className="text-gray-200  mt-5  gap-3 w-full hover:bg-red-500 transition-all duration-300 bg-slate-200 bg-opacity-10 px-3 py-2 rounded-xl flex items-center"
          >
            <Icon icon="line-md:logout" />

            <span>Logout</span>
          </button>
        </div>
      </aside>
      <button
        onClick={handleClose}
        className={`app-blur-bg z-20 transition-all  duration-300 md:hidden ${
          isDashboardSidebarOpened ? " translate-x-0 " : "-translate-x-full"
        }`}
      />
    </>
  );
};

export default DashboardSidebar;
