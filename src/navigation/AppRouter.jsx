import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routes";
import LoginPage from "../pages/Loginpage";
import ProfilePage from "../pages/ProfilePage";
import DashboardLayout from "../components/DashboardLayout";
import ErrorBoundaryPage from "../pages/ErrorBoundaryPage";
import DashboardPage from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={LoginPage} index />
        <Route Component={LoginPage} path={routes.LOGIN_PAGE} />

        <Route Component={DashboardLayout} path={routes.DASHBOARD_PAGE}>
          {/* NESTED ROUTES */}
          <Route Component={DashboardPage} index />
          <Route Component={ErrorBoundaryPage} path={routes.ERROR_BOUNDARY} />
          <Route Component={ProfilePage} path={routes.PROFILE_PAGE} />
        </Route>

        {/* 404 PAGE */}
        <Route Component={PageNotFound} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
