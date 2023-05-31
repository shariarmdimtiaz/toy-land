import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import icon from "../../assets/toyland.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("toyland-access-token");
      })
      .catch((error) => console.error(error));
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full bg-[#F974B5]">
      <nav className="container mx-auto">
        <div className="mx-auto py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-24 border-2 border-[#3197C0] rounded-full">
                <img className="px-2" src={icon} alt="logo" />
              </div>
            </div>

            <h1 className="text-black font-bold px-3 text-2xl">
              <span className="text-black">TOY</span>{" "}
              <span className="text-white">LAND</span>
            </h1>
          </div>

          <div className="sm:hidden">
            <button
              type="button"
              className="block text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none"
              onClick={toggleNavbar}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 7h-14v2h14V7Zm0 6h-14v2h14v-2Zm0 6h-14v2h14v-2Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/"
              className={classNames("py-2 px-4 mr-3 rounded", {
                "bg-[#3197C0] text-white font-bold": isActive("/"),
                "text-white hover:bg-[#3197C0] hover:text-white":
                  !isActive("/"),
              })}
            >
              Home
            </Link>
            <Link
              to="/alltoys"
              className={classNames("py-2 px-4 mr-3 rounded", {
                "text-white bg-[#3197C0] font-bold": isActive("/alltoys"),
                "text-white hover:bg-[#3197C0] hover:text-white":
                  !isActive("/alltoys"),
              })}
            >
              All Toys
            </Link>
            {!user ? (
              ""
            ) : (
              <Link
                to="/mytoys"
                className={classNames("py-2 px-4 mr-3 rounded", {
                  "text-white bg-[#3197C0] font-bold": isActive("/mytoys"),
                  "text-white hover:bg-[#3197C0] hover:text-white":
                    !isActive("/mytoys"),
                })}
              >
                My Toys
              </Link>
            )}
            {!user ? (
              ""
            ) : (
              <Link
                to="/addtoy"
                className={classNames("py-2 px-4 mr-3 rounded", {
                  "text-white bg-[#3197C0] font-bold": isActive("/addtoy"),
                  "text-white hover:bg-[#3197C0] hover:text-white":
                    !isActive("/addtoy"),
                })}
              >
                Add Toy
              </Link>
            )}
            <Link
              to="/blog"
              className={classNames("py-2 px-6 rounded", {
                "text-white bg-[#3197C0] font-bold": isActive("/blog"),
                "text-white hover:bg-[#3197C0] hover:text-white":
                  !isActive("/blog"),
              })}
            >
              Blogs
            </Link>
          </div>

          <div className="hidden md:block">
            {!user ? (
              <Link to="/login" className="">
                <button className="btn btn-primary border-[#136F95] px-5 bg-[#3197C0] text-white  hover:bg-[#136F95] hover:border-[#136F95]">
                  Login
                </button>
              </Link>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-12 rounded-full relative">
                    <div>
                      {user && (
                        <img
                          src={
                            user.photoURL
                              ? user.photoURL
                              : "https://img.freepik.com/free-icon/user_318-159711.jpg"
                          }
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <div className="absolute -top-2 left-100 opacity-0 hover:opacity-100">
                    <p className="w-44 -ps-12">{user.displayName}</p>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-warning mt-2 hover:text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            <Link
              to="/"
              className="block text-black hover:bg-[#136F95] hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>

            <Link
              to="/alltoys"
              className="block text-black hover:bg-[#136F95] hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              All Toys
            </Link>
            {user ? (
              <Link
                to="/mytoys"
                className="block text-black hover:bg-[#136F95] hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                My Toys
              </Link>
            ) : (
              ""
            )}

            {user ? (
              <Link
                to="/addtoy"
                className="block text-black hover:bg-[#136F95] hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Add Toy
              </Link>
            ) : (
              ""
            )}
            <Link
              to="/blog"
              className="block text-black hover:bg-[#136F95] hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <div>
              {!user ? (
                <Link to="/login" className="">
                  <button className="btn btn-primary border-0 bg-gradient-to-r from-[#FF8C00] to-[#FFA036] hover:text-black">
                    Login
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleLogOut}
                  className="btn btn-warning mt-2 hover:text-white"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
