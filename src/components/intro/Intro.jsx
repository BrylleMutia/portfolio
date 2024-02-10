import React from "react";

const Intro = () => {
   return (
      <section className="text-white flex flex-col items-center">
         <div>
            <h3 className="flex flex-col justify-center items-center md:flex-row md:items-baseline md:justify-start">
               <span className="font-bold text-[2em] md:mr-1">
                  Brylle Mutia{" "}
               </span>
               <span>/ Web Developer</span>
            </h3>
            <br />
            <p className="max-w-[50ch]">
               I create things for the web, from a simple "Hello World" project
               to basically anything you can think of.
            </p>
            <br />
            <p>All we need is your idea! (+ coffee!)</p>
         </div>
      </section>
   );
};

export default Intro;
