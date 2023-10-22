import { Outlet } from "react-router-dom";
import { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  const [isDashboardSidebarOpened, setIsDashboardSidebarOpened] =
    useState(false);

  return (
    <div className="min-h-screen max-w-[100rem] bg-zinc-200 mx-auto flex">
      <DashboardSidebar
        isDashboardSidebarOpened={isDashboardSidebarOpened}
        setIsDashboardSidebarOpened={setIsDashboardSidebarOpened}
      />

      <section className="w-full">
        <DashboardHeader
          onHamburgerClick={() => setIsDashboardSidebarOpened(true)}
        />
        <div className="p-5">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
