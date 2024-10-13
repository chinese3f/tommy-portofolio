import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="py-12 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">My First Project</h2>
                <div className="bg-gray-700 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">Portfolio Website</h3>
                    <p className="mb-4 text-center">
                        This portfolio represents my journey as a developer. It's a showcase of my skills, projects, and passion for web development.
                    </p>
                    <p className="mb-4 text-center">
                        Here, I demonstrate my skills in React, Tailwind CSS, and JavaScript, creating a modern and responsive design.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="YOUR_PROJECT_LINK" // Link to your portfolio or GitHub
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
