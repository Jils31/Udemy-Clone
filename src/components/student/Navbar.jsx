import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-white">
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* For Desktop and large screens */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Educator</button>|{" "}
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>

      {/* For small or phone screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500 relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-10 h-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-12 right-2 w-64 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4 z-50">
             {user && (
            <>
              <button className="text-left">Become Educator</button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
            {user ? (
              <div className="flex">
                <UserButton />
                <span className="ml-2 text-gray-700">Welcome, User!!</span>
              </div>
            ) : (
              <button
                onClick={() => openSignIn()}
                className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
              >
                Create Account
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
