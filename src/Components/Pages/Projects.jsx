import React from "react";
import ProjectsCard from "../ReUsable/ProjectsCard";
import BookStore from "../Images/online-bookstore.jpeg";
import expenses from "../Images/expenses.jpg";
import secure from "../Images/secure.jpeg";
import Dubbing from "../Images/dubbing.jpeg";
import travel from "../Images/travel.jpeg";
import cals from "../Images/calculatorapp.jpeg";

function Projects() {
  const myProjects = [
    {
      proName: "E-Commerce",
      tech: "Tech-Stack - MERN [MongoDB, Express, React, Node], Bootstrap, CSS",
      proLink: "https://github.com/M-Shivateja/BookStore",
      demo: "www.example.link",
      src: BookStore,
      alt: "project pic",
    },
    {
      proName: "PersonalExpense-Tracker",
      tech: "Tech-Stack - MERN [MongoDB, Express, React, Node], Bootstrap",
      proLink: "https://github.com/M-Shivateja/PersonalExpense_Tracker",
      demo: "https://personalexpense-tracker-1.onrender.com/",
      src: expenses,
      alt: "project pic",
    },
    {
      proName: "Secure-SignIn",
      tech: "Tech-Stack - Node.js, Express.js, React, MongoDB, Bootstrap, CSS",
      proLink: "https://github.com/M-Shivateja/SecureSignIn",
      demo: "www.example.link",
      src: secure,
      alt: "project pic",
    },
    {
      proName: "Dubbing-Interface",
      desc: "Dubbing interface where users can record their voice for a video and play it synchronously.",
      tech: "Tech-Stack - Node.js, React.js, Tailwind CSS",
      proLink: "https://github.com/M-Shivateja/Dubing_Interface.git",
      demo: "https://dubing-interface.netlify.app/",
      src: Dubbing,
      alt: "project pic",
    },
    {
      proName: "Travel-app",
      desc: "A front-end Travel Management Application where user can able book trip national and international (Still in progress).",
      tech: "Tech-Stack - React.js, Bootstrap, CSS",
      proLink: "https://github.com/M-Shivateja/Travel_Page",
      demo: "https://travel-page-ivory.vercel.app/",
      src: travel,
      alt: "project pic",
    },
    {
      proName: "Calculator-application",
      desc: "A simple calculator app that executes arithmetic operations chosen by the user upon registration.",
      tech: "Tech-Stack - React.js, Node, Express, MongoDB, Tailwind CSS",
      proLink: "https://github.com/M-Shivateja/Calculator",
      demo: "https://calculator-1-w2j6.onrender.com/",
      src: cals,
      alt: "project pic",
    },
  ];

  return (
    <div className="px-4 py-10">
      <h1 className="text-center  font-lilitaOne text-3xl font-medium text-main-color mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 w-11/12 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl  ">
        {myProjects.map(
          ({ proName, desc, tech, proLink, demo, src, alt }, key) => (
            <ProjectsCard
              proPic={src}
              alt={alt}
              proName={proName}
              desc={desc}
              proLink={proLink}
              demo={demo}
              tech={tech}
              key={key}
            />
          )
        )}
        ;
      </div>
    </div>
  );
}

export default Projects;
