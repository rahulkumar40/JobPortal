import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import { motion } from "framer-motion";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-blue-600">Categories</h2>
          <p className="text-gray-600 mt-2">
            Explore our extensive job market and discover your career path.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {Category.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 flex justify-center"
                >
                  <Button
                    onClick={() => searchjobHandler(category)}
                    className="w-full text-sm md:text-base px-6 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition-all rounded-lg shadow-sm"
                  >
                    {category}
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border shadow-md hover:bg-blue-50" />
            <CarouselNext className="bg-white border shadow-md hover:bg-blue-50" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
