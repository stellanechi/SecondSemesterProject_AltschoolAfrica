import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import routes from "../navigation/routes";
import { EMAIL_LOCAL_STORAGE_KEY } from "../config";
import useAuthentication from "../hooks/useAuthentication";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // CUSTOM HOOK FOR GETTING THE LOGGED IN USERs
  const { email: authEmail } = useAuthentication();

  useEffect(() => {
    if (authEmail) navigate(routes.DASHBOARD_PAGE, { replace: true });
  }, [authEmail]);

  const handleSumbit = (e) => {
    e.preventDefault();

    localStorage.setItem(EMAIL_LOCAL_STORAGE_KEY, email.trim());
    navigate(routes.DASHBOARD_PAGE, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-md w-[500px]">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSumbit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              required
              minLength={3}
              maxLength={30}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
