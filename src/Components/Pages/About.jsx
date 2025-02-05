import React from "react";
import SkillCard from "../ReUsable/SkillCard";
function About() {
  const skills = [
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
      label: "React",
      desc: "Javascript Library",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
      label: "MongoDB",
      desc: "DATABASE",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      label: "Node.js",
      desc: "Server side",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000",
      label: "Express.js",
      desc: "Node.js Framework",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      label: "HTML5",
      desc: "Web Sturcture",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      label: "CSS",
      desc: "style web pages",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
      label: "Tailwind ",
      desc: "styling Framework",
    },
  ];

  return (
    <div class="container mt-10  px-8 py-8 justify-center max-w-full ">
      {/* About me SECTION */}
      <div>
        <h1 class="text-center font-lilitaOne font-medium text-3xl text-main-color mb-6">
          ABOUT ME..
        </h1>
        <p class="text-justify font-mplusrounded leading-loose text-lg justify-center font-medium flex tracking-tighter lg:tracking-normal text-desc-color sm:mx-10 ">
          Hi, I’m M Shiva Teja, MERN Stack Developer with a B.Tech degree and a
          strong passion for creating innovative web applications. While I don’t
          have professional experience yet, I’ve dedicated myself to mastering
          the MERN stack — MongoDB, Express.js, React.js, and Node.js through
          self-learning and personal projects.
          <br /> Earning my MERN Certification has equipped me with the skills
          and confidence to design intuitive user interfaces, build scalable
          backend systems, and creating responsive and functional applications.
          My journey so far has been driven by curiosity, determination, and a
          commitment to continuous improvement. I believe that my hands-on
          project experience, combined with my eagerness to learn and grow,
          positions me well to contribute effectively to real-world development
          challenges. I’m excited to bring my creativity and technical expertise
          to collaborative projects while further developing my skills as a
          developer.
        </p>
      </div>
      {/* EDUCATION SECTION */}
      <div class=" p-4">
        <h1 class="text-center font-lilitaOne font-medium text-3xl mt-12 text-main-color  mb-8">
          Education
        </h1>
        <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div class="flex md:contents flex-row-reverse">
            <div class=" relative p-4 my-6 text-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 class="text-lg text-white font-semibold lg:text-xl">
                Bachelor's Degree
              </h3>
              <p class="mt-2  text-white leading-6">
                Amrita Vishwa Vidyapeetham <i class="text-xs">Coimabtore</i>
              </p>
              <p class="mt-2 leading-6">CGPA - 7.5</p>
              <span class="absolute text-sm text-white/80 -top-5 left-2 whitespace-nowrap">
                2019-2023
              </span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-project-card-color rounded-t-full bg-gradient-to-b from-logo-color to-project-card-color"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-project-card-color border-4 border-logo-color rounded-full top-1/2"></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-project-card-color"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-project-card-color border-4 border-logo-color rounded-full top-1/2"></div>
            </div>
            <div class=" relative p-4 my-6 text-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 class="text-lg font-semibold lg:text-xl">
                Higher Secondary School degree
              </h3>
              <p class="mt-2 leading-6">
                Bhashyam Junior College <i class="text-xs"> Tirupati</i>
              </p>

              <p class="mt-2 leading-6">CGPA - 8.86</p>

              <span class="absolute text-sm text-white/80 -top-5 left-2 whitespace-nowrap">
                2017-2019
              </span>
            </div>
          </div>

          <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 my-6 text-white  rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 class="text-lg font-semibold lg:text-xl">
                MERN Full Stack Certification
              </h3>
              <p class="mt-2 leading-6">
                Ethnus Codemithra <i class="text-xs">Bengaluru</i>
              </p>

              <p>
                <a
                  href="https://drive.google.com/file/d/1mgPh1ojJJK5k1RcbYYnifz61fjqF6ekC/view?usp=sharing"
                  className="mt-2 leading-6  text-indigo-500 hover:text-indigo-400 "
                >
                  click to view
                </a>
              </p>
              <span class="absolute text-sm text-white/80 -top-5 left-2 whitespace-nowrap">
                2023-2024
              </span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-project-card-color rounded-t-full bg-gradient-to-b from-project-card-color to-logo-color"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-project-card-color border-4 border-logo-color rounded-full top-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-center font-lilitaOne text-main-color mt-10 mb-10 font-medium text-3xl">
        Technical Skills
      </h1>
      <div class="md:mx-40 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_2fr))] ">
        {skills.map(({ imgSrc, label, desc }, key) => {
          return (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          );
        })}
      </div>
    </div>
  );
}

export default About;
