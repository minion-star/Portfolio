import banner from "../../public/banner.png"; // Ensure banner.png is placed inside the assets folder
import linkedin from "../assets/linkedin-in.png";
import github from "../assets/github.png";
import facebook from "../assets/facebook-f.png"
import instagram from "../assets/instagram.png"


const Home = () => {

  return (
    <section id="home" className="w-full bg-[#31065A] flex flex-col md:flex-row items-center bg-cover justify-between py-20 px-6 m-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left p-6">
            <h1 className="text-4xl font-bold text-white">Hi, I'm William Alderette</h1>
            <h2 className="text-2xl font-semibold text-orange-500 mt-2">
            Frontend Developer
            </h2>
            <p className="mt-4 text-lg text-white">
            I am a passionate frontend developer with experience in building modern, responsive, and user-friendly websites.
            I specialize in React, Tailwind CSS, and modern UI frameworks.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-white text-xl hover:text-orange-500 transition">
                    <img src={facebook} className="h-8 border-white border-2 rounded-full p-1"/>
                </a>
                <a href="#" className="text-white text-xl hover:text-orange-500 transition">
                    <img src={linkedin} className="h-8 border-white border-2 rounded-full p-1"/>
                </a>
                <a href="#" className="text-white text-xl hover:text-orange-500 transition">
                    <img src={github} className="h-8 border-white border-2 rounded-full p-1"/>
                </a>
                <a href="#" className="text-white text-xl hover:text-orange-400 transition">
                    <img src={instagram} className="h-8 border-white border-2 rounded-full p-1"/>
                </a>
            </div>

            {/* Download CV Button */}
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition cursor-pointer">
            Download CV
            </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={banner} alt="Banner" className="w-full max-w-[500px]" />
        </div>
    </section>
  );
};

export default Home;
