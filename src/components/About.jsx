import React from "react";
import myPhoto from "../assets/robot.png"; // Update the path to your image

const About = () => {
    return (
        <section id="about" className="py-12 bg-gray-200 text-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
                <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
                    <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
                        <img src={myPhoto} alt="Tomi" className="rounded-lg w-full h-auto" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">Hello! I'm Tomi</h3>
                        <p className="mb-4">
                            I am a passionate developer with a keen interest in building dynamic web applications.
                            My journey in coding started when I discovered the joy of creating interactive user experiences.
                        </p>
                        <p className="mb-4">
                            With a strong foundation in front-end technologies like HTML, CSS, and JavaScript, 
                            I have transitioned into full-stack development, where I enjoy solving complex problems 
                            and building intuitive applications.
                        </p>
                        <p>
                            My goal is to continuously learn and improve my skills while contributing to exciting projects. 
                            I believe that technology should be accessible to everyone, and I strive to create solutions 
                            that enhance user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
