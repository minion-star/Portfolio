import photo from "../assets/about img.png";

const AboutMe = () => {
  return (
    <div className="w-full bg-[#170550]" id="about">
      {/* Title Section - Full Width */}
      <div className="w-full text-center mb-8 md:mb-12 bg-[#170550]">
        <h2 className="text-white text-3xl font-semibold border-b-2 border-white inline-block pb-2">
          About <span className="text-orange-500">Me</span>
        </h2>
      </div>

      {/* Main About Section */}
      <section
        className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-6"
        
      >
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center items-center px-6">
          <img
            src={photo}
            alt="Profile"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left px-6 mt-8 md:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Full Stack Developer
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            I am a highly skilled <span className="font-semibold text-orange-400">Full Stack Developer</span> with expertise in building 
            scalable, high-performance web and mobile applications. With a strong background in 
            <span className="font-semibold text-orange-400"> React, TypeScript, Tailwind CSS, Node.js, Express, and MySQL</span>, I specialize 
            in delivering seamless user experiences and robust backend solutions.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            I have developed numerous websites across diverse industries, including 
            <span className="font-semibold text-orange-400"> e-commerce, healthcare, and fintech</span>, ensuring secure, 
            efficient, and user-friendly digital solutions. My technical expertise spans 
            <span className="font-semibold text-orange-400"> frontend development, backend architecture, database management, 
            and API integrations</span>, allowing me to build end-to-end applications tailored to client needs.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            With a keen eye for <span className="font-semibold text-orange-400">design and performance optimization</span>, 
            I am passionate about creating modern, responsive, and intuitive web applications that drive business success. 
            Whether it's developing complex dashboards, secure payment systems, or AI-powered solutions, 
            I bring a <span className="font-semibold text-orange-400">problem-solving mindset and customer-centric approach</span> 
            to every project.
          </p>
          <button className="mt-6 px-6 py-2 bg-white rounded-full  hover:bg-gray-200 transition cursor-pointer">
            Read More...
          </button>
        </div>

      </section>
    </div>
  );
};

export default AboutMe;
