import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <img 
        src="/myphoto.PNG" // Move your image to the public folder
        alt="Tomi"
        className="rounded-full h-60 w-60 mb-6 object-cover" // Added object-cover for better image handling
      />
      <h2 className="text-5xl font-bold mb-4 md:text-6xl">Hi, I'm Tomi</h2>
      <p className="text-xl mb-4 md:text-2xl">I’m a passionate developer specializing in web development.</p>
      <div className="flex space-x-4">
        <a 
          href="/cv.pdf" // Ensure the CV is in the public folder
          download
          className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          aria-label="Download My CV"
        >
          Download My CV
        </a>
        <a 
          href="#contact" 
          className="bg-purple-800 text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-900 transition duration-300 transform hover:scale-105"
          aria-label="Contact Me"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;

