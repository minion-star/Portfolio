import computer from "../assets/computer.png";
import mobile from "../assets/mobile.png";
import digitalmarketing from "../assets/digitalmarketing.png";


const Services = () =>{
    return (
        <div id="services" className="w-full bg-[#31065A]">
            <div className="w-full text-center mb-8 md:mb-12 pt-16">
                <h2 className="text-white text-3xl font-semibold border-b-2 border-white inline-block pb-2">
                My <span className="text-orange-500">Services</span>
                </h2>
            </div>
            {/* Main Services Section */}
            <section
                    className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-12"
                    
                >
                    {/* Service */}
                    <div className="w-full md:w-1/3 text-center md:text-left px-6 mt-8 md:mt-0 bg-white mr-3 flex flex-col items-center rounded-2xl">
                        <img src={computer} className="h-16 w-16 mt-2" />
                        <h4 className="text-[#31065A]">Web Development</h4>
                    </div>
                    <div className="w-full md:w-1/3 text-center md:text-left px-6 mt-8 md:mt-0 bg-white mr-3 flex flex-col items-center rounded-2xl">
                        <img src={mobile} className="h-16 w-16 mt-2"/>
                        <h4 className="text-[#31065A]">Apps Development</h4>
                    </div>
                    <div className="w-full md:w-1/3 text-center md:text-left px-6 mt-8 md:mt-0 bg-white mr-3 flex flex-col items-center rounded-2xl">
                        <img src={digitalmarketing} className="h-16 w-16 mt-2" />
                        <h4 className="text-[#31065A]">Digital Marketing</h4>
                    </div>
            </section>
        </div>
    );
}


export default Services;