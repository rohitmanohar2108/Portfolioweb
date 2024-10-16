import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStar,
  FaInstagram,
} from "react-icons/fa"; // Import social media icons
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[500px] bg-gray-900 text-white flex items-center justify-center px-10"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Name, Description, Social Media Links, Button */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-5xl font-bold mb-4">Rohit Manohar</h2>
          <p className="text-lg">
            CSE undergrad @ NITK'26| Executive Members Media @TEDxNITKSurathkal
            | Web design |Technology enthusiastic |
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/rohitmanohar2108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a
              href="https://twitter.com/rohit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter className="h-7 w-7" />
            </a>
            <a
              href="https://www.instagram.com/rohit_2108_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram className="h-7 w-7" />
            </a>
            <a
              href="mailto:manoharrohit372@gmail.com" // Replace with your actual email
              className="text-white hover:text-gray-400"
            >
              <AiOutlineMail className="h-7 w-7" />{" "}
              {/* Gmail Icon with larger size */}
            </a>
          </div>

          {/* Button to GitHub Repository */}
          <a
            href="https://github.com/rohitmanohar2108/Portfolioweb"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center bg-yellow-500  text-gray-900 w-32  px-6 py-3 rounded-full hover:bg-yellow-400  hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white transition duration-200"
          >
            <FaStar className="mr-2 h-5 w-5" />
            Star
          </a>
        </div>

        {/* Right Side: Circular Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQHdDi6OfTqrwg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725916584983?e=1729602000&v=beta&t=ewd4FhhBt-RMNlnC-fHAjd4PbcDB7GsEsl-cAQKvtjM"
            alt="Rohit Manohar"
            className="w-60 h-60 object-cover rounded-full border-4 border-gray-300 ml-96 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
