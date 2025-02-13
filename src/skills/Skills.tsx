
const skills = [
    { name: "HTML - 5", level: 80 },
    { name: "CSS - 3", level: 75 },
    { name: "Bootstrap", level: 60 },
    { name: "JavaScript", level: 50 },
    { name: "Adobe Photoshop", level: 75 },
    { name: "Adobe Illustrator", level: 60 },
  ];

const Skills = () => {
    return (
        <div id="skills" className="w-full bg-[#170550] px-12 py-16">
            {/* title */}
            <div className="w-full text-center mb-8 md:mb-12">
                <h2 className="text-white text-3xl font-semibold border-b-2 border-white inline-block pb-2">
                My <span className="text-orange-500">Skills</span>
                </h2>
            </div>
            {/* skills */}
            <div className="space-y-4 py-16 ">
                {skills.map((skill, index) => (
                <div key={index} className="w-full md:flex-row flex flex-col items-center">
                        <span className="text-sm font-medium mb-1 md:w-1/5 text-left text-white">{skill.name}</span>
                        <div className="w-full bg-[#43366A] rounded-full h-2.5 mb-1 md:w-7/10">
                            <div
                                className="bg-orange-500 h-2.5 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <span className="text-sm font-medium mb-1 md:w-1/10 text-white text-right">{skill.level}%</span>
                    
                </div>
                ))}
            </div>
        </div>
    );
}


export default Skills;