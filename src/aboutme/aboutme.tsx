import photo from "../assets/about img.png"


const AboutMe = () => {

    




  return (
    <section className="w-full bg-[#170550] flex flex-col md:flex-row items-center bg-cover justify-between py-20 px-6 m-0" id="about">
        <div className="w-full flex justify-center items-center">
          <span className="text-white border-white m-1">About <b className="text-orange-500">Me</b></span>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={photo} alt="Banner" className="w-full max-w-[500px]" />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left p-6">
    
        </div>
    </section>
  );
};

export default AboutMe;
