import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const MenuDropdown = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 cursor-pointer">
          <ul className="flex justify-center items-center font-bold gap-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/collages">Colleges</NavLink>
            </li>
            <li>
              <NavLink to="/">Admission</NavLink>
            </li>
            <li>
              <NavLink to="/">My College</NavLink>
            </li>
            <div className="text-lg text-purple-500">
              {user && user.displayName}
            </div>
          </ul>
        </div>
        <div
          // onClick={toggleOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            <Link
              to="/collages"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Colleges
            </Link>
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Admission
            </Link>
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              My College
            </Link>
            {user ? (
              <div
                onClick={logOut}
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
              >
                Logout
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
