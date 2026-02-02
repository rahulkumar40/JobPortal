import React from "react";
import Navbar from "../components_lite/Navbar";

const Creator = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Empowering Students & Developers for a Better Future 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide guidance, mentorship, and real-world projects to help
            students and young professionals grow into confident engineers,
            designers, and innovators.
          </p>
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-lg transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 mb-6 max-w-4xl mx-auto">
            Our mission is to bridge the gap between academics and industry by
            fostering practical knowledge, hands-on skills, and innovation-driven
            learning. With the guidance of experienced mentors and the dedication
            of passionate students, we aim to create impactful solutions and
            career-ready engineers.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {/* What We Do */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What We Do
              </h3>
              <p className="text-gray-600 text-sm">
                We train students in web development, UI/UX, research, and
                real-world projects to enhance their technical and creative
                skills.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                To build a strong foundation for students by combining academic
                excellence with real-world problem solving.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm">
                To empower the next generation of engineers, innovators, and
                leaders who can make an impact globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-12">
            The developers and designers who worked together to bring this
            project to life.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Ankit */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Ankit Pathak
              </h3>
              <p className="text-gray-500 text-sm">
                Reg. No: 21110125035
              </p>
              <p className="text-gray-600 mt-2">Full Stack Developer</p>
            </div>

            {/* Ritik */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Ritik Shrivastava
              </h3>
              <p className="text-gray-500 text-sm">
                Reg. No: 21110125043
              </p>
              <p className="text-gray-600 mt-2">UI/UX Designer</p>
            </div>

            {/* Gaurav */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Gaurav Kumar
              </h3>
              <p className="text-gray-500 text-sm">
                Reg. No: 21110125023
              </p>
              <p className="text-gray-600 mt-2">Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8 text-gray-300">
            Have questions, suggestions, or want to collaborate? We’d love to
            hear from you!
          </p>
          <a
            href="mailto:career-support@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-lg transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Creator;
