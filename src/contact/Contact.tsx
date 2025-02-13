import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="w-full bg-[#170550]">
            {/* title */}
            <div className="w-full text-center mb-8 md:mb-12 pt-16">
                <h2 className="text-white text-3xl font-semibold border-b-2 border-white inline-block pb-2">
                    Contact
                </h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {/* Contact Info */}
                <div className="space-y-4 text-lg">
                    <p className="flex items-center gap-3 text-white">
                        <FaPhone className="text-xl text-gray-300" />
                        +8801863-931220 <br />
                        +8801567-953483
                    </p>
                    <p className="flex items-center gap-3 text-white">
                        <FaEnvelope className="text-xl text-gray-300" />
                        mdrielad.bdg@gmail.com
                    </p>
                    <p className="flex items-center gap-3 text-white">
                        <FaMapMarkerAlt className="text-xl text-gray-300" />
                        Zirabo, Ashulia, Savar, Dhaka
                    </p>
                </div>

                {/* Contact Form */}
                <form className="space-y-4 mb-16">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 rounded-md bg-[#43366A] text-white outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 rounded-md bg-[#43366A] text-white outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input
                        type="text"
                        placeholder="Phone Number"
                        className="p-3 rounded-md bg-[#43366A] text-white outline-none"
                        />
                        <input
                        type="text"
                        placeholder="Subject"
                        className="p-3 rounded-md bg-[#43366A] text-white outline-none"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 rounded-md bg-[#43366A] text-white outline-none"
                    />
                    <button className="w-full py-2 bg-[#43366A] rounded-md hover:bg-[#7A5DD9] transition">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}


export default Contact;