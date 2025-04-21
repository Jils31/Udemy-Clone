import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
// Clerk components for auth management
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Clerk hooks for authentication
  const { openSignIn } = useClerk();  // Opens Clerk's sign-in modal
  const { user } = useUser();         // Gets current user state

  return (
    <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-white">
      <div className="flex items-center gap-2">
        <img
          src={assets.udemyIcon}
          alt="Logo"
          className="w-12 lg:w-12 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <p onClick={() => navigate("/")} className="font-semibold text-2xl cursor-pointer">Udemy</p>
      </div>

      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
            <p>Welcome Comrade!!</p>
            </>
          )}
        </div>
        {user ? (
          <UserButton /> // Clerk's built-in user profile button
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>

      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500 relative">
        {/* Hamburger menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-10 h-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-12 right-2 w-64 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4 z-50">
            {user && (
              <>
                <p>Welcome Comrade!!</p>
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
