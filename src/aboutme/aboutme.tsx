import photo from "../assets/about img.png";

const AboutMe = () => {
  return (
    <div className="w-full bg-[#170550]">
      {/* Title Section - Full Width */}
      <div className="w-full text-center mb-8 md:mb-12 bg-[#170550]">
        <h2 className="text-white text-3xl font-semibold border-b-2 border-white inline-block pb-2">
          About <span className="text-orange-500">Me</span>
        </h2>
      </div>

      {/* Main About Section */}
      <section
        className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-6"
        id="about"
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
            Frontend Developer & Graphic Designer
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reiciendis, quas voluptatem facere quam iusto itaque sapiente dolor
            provident aspernatur unde, suscipit illum, velit similique animi
            iste corporis repellendus veritatis minus.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reiciendis, quas voluptatem facere quam iusto itaque sapiente dolor
            provident.
          </p>
          <button className="mt-6 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-[#170550] transition">
            Read More...
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
