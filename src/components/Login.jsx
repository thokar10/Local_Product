import NavBar from "./Navbar";
const Login = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[cadetblue] overflow-hidden">
        <NavBar />
        <div className="flex justify-center items-center  min-h-[calc(100vh-90px)]">
          <form className="flex flex-col gap-10 rounded-3xl  w-[35%] p-8  shadow-2xl bg-white">
            <h2 className="text-center text-2xl font-semibold">Please Login</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-md font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-md font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 cursor-pointer p-4 text-white rounded-md hover:bg-blue-700 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
