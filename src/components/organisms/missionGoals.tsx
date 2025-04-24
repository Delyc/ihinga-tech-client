import React from "react";
import { FaBullseye, FaSeedling, FaHandsHelping } from "react-icons/fa"; // Icons for a more visual appeal

export const VisionMissionGoals = () => {
  return (
    <section id="about" className="relative bg-gradient-to-r from-green-800 lg:mt-20 rounded-2xl to-primary-green  py-10 lg:py-20 px-5 lg:px-14 text-white">
    {/* <section className="relative bg-gradient-to-r from-green-200 to-green-500 py-20 px-4 text-white"> */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/assets/pig.jpeg')" }}></div>

      <div className="relative lg:max-w-7xl  mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Commitment</h2>
        <p className="text-lg md:text-xl lg:max-w-3xl mx-auto mb-12">
          We’re redefining the future of farming. Through sustainable practices, ethical care, and innovative solutions, we aim to bring the highest quality pork to our community.
        </p>

        <div className="grid gap-12 md:grid-cols-3 text-center">
          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:scale-105 transition transform">
            <div className="text-4xl mb-4 text-green-500">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-sm text-gray-700 mt-4">
              To be a leader in sustainable and ethical pig farming, recognized for our innovation and care for animals.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:scale-105 transition transform">
            <div className="text-4xl mb-4 text-green-500">
              <FaSeedling />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-sm text-gray-700 mt-4">
              To provide the highest-quality pork products while protecting the environment and promoting ethical farming practices.
            </p>
          </div>

          {/* Goals */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:scale-105 transition transform">
            <div className="text-4xl mb-4 text-green-500">
              <FaHandsHelping />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Goals</h3>
            <p className="text-sm text-gray-700 mt-4">
              To promote animal welfare, sustainable practices, and community outreach, ensuring growth that benefits all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
