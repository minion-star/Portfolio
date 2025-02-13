import { FaExternalLinkAlt } from "react-icons/fa";
import portfolio1 from "../assets/Rectangle 20.png"
import portfolio2 from "../assets/Rectangle 21.png"
import portfolio3 from "../assets/Rectangle 22.png"
import portfolio4 from "../assets/Rectangle 23.png"
import portfolio5 from "../assets/Rectangle 24.png"
import portfolio6 from "../assets/Rectangle 25.png"
import portfolio7 from "../assets/Rectangle 26.png"
import portfolio8 from "../assets/Rectangle 27.png"
const portfolioItems = [
    { id: 1, imgSrc: portfolio1, title: "Web Design" },
    { id: 2, imgSrc: portfolio2 },
    { id: 3, imgSrc: portfolio3 },
    { id: 4, imgSrc: portfolio4 },
    { id: 5, imgSrc: portfolio5 },
    { id: 6, imgSrc: portfolio6 },
    { id: 7, imgSrc: portfolio7 },
    { id: 8, imgSrc: portfolio8 },
  ];

const Portfolio = () => {
    return (
        <div id="portfolio" className="w-full bg-[#31065A]">
            {/* title */}
            <div className="w-full text-center mb-8 md:mb-12 pt-16">
                <h2 className="text-white text-3xl font-semibold border-b-2 border-white inline-block pb-2">
                    Portfolio
                </h2>
            </div>
            {/* portfolio */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between py-16 px-12"> 
                    {portfolioItems.map((item) => (
                    <div key={item.id} className="relative group w-full md:w-1/4 m-2">
                        <img
                        src={item.imgSrc}
                        alt={`Portfolio ${item.id}`}
                        className="w-full h-full object-cover rounded-lg"
                        />
                        {item.title && (
                        <div className="absolute inset-0 bg-purple-600 bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg">
                            <FaExternalLinkAlt className="text-white text-xl mb-2" />
                            <p className="text-white font-semibold">{item.title}</p>
                        </div>
                        )}
                    </div>
                    ))}
            </div>
        </div>
    );
}


export default Portfolio;