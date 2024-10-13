import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons"; // Solid star
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"; // Regular star

// Star rating component
const StarRating = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={index < rating ? fasStar : farStar} // Use the correct star icons
                    className="text-yellow-400"
                />
            ))}
        </div>
    );
};

const Skills = () => {
    const frontEndSkills = [
        { name: 'HTML', icon: faHtml5, rating: 5 },
        { name: 'CSS', icon: faCss3Alt, rating: 4 },
        { name: 'JavaScript', icon: faJs, rating: 4 },
        { name: 'React', icon: faReact, rating: 5 },
        { name: 'Tailwind CSS', icon: faCss3Alt, rating: 4 },
    ];

    const backEndSkills = [
        { name: 'Node.js', icon: faNodeJs, rating: 5 },
        { name: 'Express.js', icon: faNodeJs, rating: 4 },
        { name: 'MongoDB', icon: faDatabase, rating: 4 },
        { name: 'PostgreSQL', icon: faDatabase, rating: 4 },
        { name: 'Git', icon: faGitAlt, rating: 5 },
    ];

    return (
        <section id="skills" className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Front-End Card */}
                    <div className="bg-gray-700 rounded-lg p-6 shadow-lg flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-center">Front-End</h3>
                        <ul className="list-disc list-inside">
                            {frontEndSkills.map((skill) => (
                                <li key={skill.name} className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={skill.icon} className="mr-2 text-xl" />
                                    <span className="mr-2">{skill.name}</span>
                                    <StarRating rating={skill.rating} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Back-End Card */}
                    <div className="bg-gray-700 rounded-lg p-6 shadow-lg flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-center">Back-End</h3>
                        <ul className="list-disc list-inside">
                            {backEndSkills.map((skill) => (
                                <li key={skill.name} className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={skill.icon} className="mr-2 text-xl" />
                                    <span className="mr-2">{skill.name}</span>
                                    <StarRating rating={skill.rating} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
