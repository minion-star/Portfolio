

const AboutMe = () => {
    return (
        <div id="about" className="bg-[#31065A] flex m-0 w-full">
            <div className="text-center max-w-2xl p-6 bg-opacity-100 rounded-lg">
                <h1 className="text-4xl font-bold">Hi, I'm MD RIEAD MIA</h1>
                <h2 className="text-2xl font-semibold text-orange-400">
                    Frontend Developer
                </h2>
                <p className="mt-4 text-lg">
                I am a passionate frontend developer with experience in building modern, responsive, and user-friendly websites. 
                I specialize in React, Tailwind CSS, and modern UI frameworks.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                <a href="#" className="text-white text-xl">
                    🔗 LinkedIn
                </a>
                <a href="#" className="text-white text-xl">
                    💼 GitHub
                </a>
                <a href="#" className="text-white text-xl">
                    📧 Contact
                </a>
                </div>
                <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                Download CV
                </button>
            </div>
            <div className="flex items-center">
                <img src="banner.png" alt="Banner" />
            </div>
        </div>
    );
}

export default AboutMe;