import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {}, { withCredentials: true });
      if (res?.data?.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      toast.error("Error logging out. Please try again.");
    }
  };

  const navLinks =
    user && user.role === "Recruiter"
      ? [
          { name: "Companies", path: "/admin/companies" },
          { name: "Jobs", path: "/admin/jobs" },
        ]
      : [
          { name: "Home", path: "/Home" },
          { name: "Browse", path: "/Browse" },
          { name: "Jobs", path: "/Jobs" },
          { name: "About", path: "/Creator" },
        ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-[#6B3AC2]">Career</span>
          <span className="text-[#FA4F09]">Sphere</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex font-medium items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-[#6B3AC2] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth / Profile */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={"/register"}>
                <Button className="bg-red-600 hover:bg-red-700">Register</Button>
              </Link>
            </>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="user" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} alt="user" />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user?.fullname}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {user.role === "Student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Link to={"/Profile"}>
                        <Button variant="link">Profile</Button>
                      </Link>
                    </div>
                  )}
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 hover:text-[#6B3AC2]"
              onClick={() => setMobileMenu(false)}
            >
              {link.name}
            </Link>
          ))}

          {!user ? (
            <div className="flex gap-2 mt-4">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-4">
              {user.role === "Student" && (
                <Link to="/Profile" className="text-gray-700 hover:text-[#6B3AC2]">
                  Profile
                </Link>
              )}
              <button
                onClick={logoutHandler}
                className="text-red-600 hover:text-red-700 text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
