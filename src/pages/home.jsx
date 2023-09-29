import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const SectionBox = ({ title, description, icon, color }) => {
    return (
        <motion.div
            className={`rounded-lg shadow-lg ${color} p-6`}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center justify-center mb-4">
                <img src={icon} alt={title} className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-white mt-2">{description}</p>
        </motion.div>
    );
};

const Maintainers = () => {
    return (
        <section className="py-12 gradient-bg-service">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-6">Maintainers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <SectionBox
                        title="Maintainer 1"
                        description="Description of Maintainer 1."
                        icon="maintainer1.png"
                        color="blue"
                    />
                    <SectionBox
                        title="Maintainer 2"
                        description="Description of Maintainer 2."
                        icon="maintainer2.png"
                        color="green"
                    />
                    <SectionBox
                        title="Maintainer 3"
                        description="Description of Maintainer 3."
                        icon="maintainer3.png"
                        color="purple"
                    />
                    {/* Add more Maintainer boxes as needed */}
                </div>
            </div>
        </section>
    );
};

const LearningResources = () => {
    return (
        <section className="py-12 gradient-bg-service">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-6">
                    Learning Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <SectionBox
                        title="Resource 1"
                        description="Description of Resource 1."
                        icon="resource1.png"
                        color="yellow"
                    />
                    <SectionBox
                        title="Resource 2"
                        description="Description of Resource 2."
                        icon="resource2.png"
                        color="teal"
                    />
                    <SectionBox
                        title="Resource 3"
                        description="Description of Resource 3."
                        icon="resource3.png"
                        color="orange"
                    />
                    {/* Add more Learning Resources boxes as needed */}
                </div>
            </div>
        </section>
    );
};

const CodingChallenges = () => {
    return (
        <section className="py-12 gradient-bg-service-2">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-6">
                    Coding Challenges
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <SectionBox
                        title="Challenge 1"
                        description="Description of Challenge 1."
                        icon="challenge1.png"
                        color="red"
                    />
                    <SectionBox
                        title="Challenge 2"
                        description="Description of Challenge 2."
                        icon="challenge2.png"
                        color="blue"
                    />
                    <SectionBox
                        title="Challenge 3"
                        description="Description of Challenge 3."
                        icon="challenge3.png"
                        color="green"
                    />
                    <SectionBox
                        title="Challenge 4"
                        description="Description of Challenge 4."
                        icon="challenge4.png"
                        color="purple"
                    />
                    <SectionBox
                        title="Challenge 5"
                        description="Description of Challenge 5."
                        icon="challenge5.png"
                        color="orange"
                    />
                    {/* Add more Coding Challenges boxes as needed */}
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <div>
            <section className="relative w-full h-screen mx-auto text-white gradient-bg-welcome">
                <Navbar />
                <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto p-6 flex flex-row items-start gap-5">
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                        <div className="w-1 sm:h-80 h-40 violet-gradient" />
                    </div>

                    <div>
                        <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>
                            Welcome to <span className="text-[#915EFF]">LearnTrinity</span>
                        </h1>
                        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
                            Your One-Stop Platform for Coding Challenges, Tutorials, and More
                        </p>
                    </div>
                </div>
            </section>

            <div className="px-6 py-12 gradient-bg-services">
                <Maintainers />
            </div>
            <div className="px-6 py-12 gradient-bg-services-2">
                <LearningResources />
            </div>
            <div className="px-6 py-12 gradient-bg-services" />
            <div className=" gradient-bg-services-2">
                <CodingChallenges />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
