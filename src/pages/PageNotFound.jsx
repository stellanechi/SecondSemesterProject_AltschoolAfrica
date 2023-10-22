import { useNavigate } from "react-router-dom";

import Error404 from "../assets/Error404.svg";
import routes from "../navigation/routes";

const PageNotFound = () => {
  const navigation = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 2) navigation(-1, { replace: true });
    else navigation(routes.LOGIN_PAGE, { replace: true });
  };

  return (
    <main className="min-h-screen gap-5 flex flex-col items-center justify-center">
      <img className="w-full max-w-sm" src={Error404} />

      <h1 className="font-semibold text-xl md:text-2xl text-center lg:text-3xl">
        Sorry, the page can’t be found
      </h1>
      <h2 className="font-semibold text-base md:text-lg text-center lg:text-xl">
        The page you were looking for appears to have been moved, deleted or
        does not exist.
      </h2>
      <button
        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-800 hover:scale-110 transition-all duration-300 text-white font-medium text-xl"
        type="button"
        onClick={handleBackClick}
      >
        Go back
      </button>
    </main>
  );
};

export default PageNotFound;
