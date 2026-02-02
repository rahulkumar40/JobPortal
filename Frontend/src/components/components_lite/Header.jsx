import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    if (query.trim() === "") return;
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-purple-100 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        {/* Top Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-5 py-2 flex justify-center items-center gap-2 rounded-full bg-gray-200 text-red-600 font-medium shadow-sm"
        >
          <PiBuildingOfficeBold className="text-[#614232] text-lg" />
          No.1 Job Hunt Website
        </motion.span>

        {/* Hero Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Search, Apply & <br />
          Get Your{" "}
          <span className="text-[#6A38C2] underline decoration-wavy decoration-orange-400">
            Dream Job
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Start your hunt for life-changing career opportunities here in your
          selected areas. Apply easily and get hired quickly!
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex w-full md:w-[60%] lg:w-[40%] shadow-lg border border-gray-300 pl-5 rounded-full items-center gap-3 mt-6 bg-white"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find Your Dream Job"
            className="outline-none border-none w-full py-3 text-gray-700 text-base bg-transparent"
            onKeyDown={(e) => e.key === "Enter" && searchjobHandler()}
          />
          <Button
            onClick={searchjobHandler}
            className="rounded-r-full px-6 py-5 bg-[#6A38C2] hover:bg-[#5b2da8] text-white"
          >
            <Search className="h-5 w-5" />
          </Button>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10"
        >
          <img
            src="../src/assets/heroSection.png"
            alt="Job hunt illustration"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
