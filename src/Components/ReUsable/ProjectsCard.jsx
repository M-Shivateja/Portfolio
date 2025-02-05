import React from "react";
import github from "../Images/githubone.svg";
import link from "../Images/link.svg";

function ProjectsCard({ proName, desc, tech, proLink, demo, proPic, alt }) {
  return (
    <div className=" rounded-2xl  transition delay-150 duration-500 ease-in-out  hover:scale-105 shadow-lg flex flex-col items-start mt-5 gap-2 bg-project-card-color mx-4 p-4 ">
      <div className="rounded-md ">
        <img src={proPic} alt={alt} width={600} height={400} />
      </div>

      <h1 className="font-londrinaSolid text-2xl text-white">{proName}</h1>
      <p className="text-black text-desc-color text-md">{desc}</p>
      <div className="flex gap-3">
        <h3 className="text-white/70">{tech}</h3>
      </div>

      <h3 className="font-bold">Team: M shivateja</h3>
      <div className="flex gap-8">
        <a
          href={proLink}
          target="_blank"
          rel="noreferrer"
          className="mt-2 rounded-full transition delay-150 duration-500 ease-in-out  hover:scale-105"
        >
          <img src={github} alt="Git icon" />
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="mt-5 rounded-full transition delay-150 duration-500 ease-in-out  hover:scale-105 "
        >
          <img src={link} alt="link icon" />
        </a>
      </div>
    </div>
  );
}

export default ProjectsCard;
