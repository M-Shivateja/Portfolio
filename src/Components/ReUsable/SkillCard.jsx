import React from "react";
import "../Images/javascript.svg";

function SkillCard({ imgSrc, desc, label, classes }) {
  return (
    <div class="flex items-center gap-3 font-bold hover:text-white ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 bg-skills-color hover:bg-zinc-800 group-hover:z-1 transition-color hover:!scale-110 duration-500 ">
      <figure class="bg-black rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img
          className="hover:!scale-110 duration-500  justify-center"
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
        />
      </figure>
      <div>
        <h1>{label}</h1>
        <p class="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default SkillCard;
