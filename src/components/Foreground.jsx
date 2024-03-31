import React, { useRef } from "react";
import Cards from "./Cards";
function Foreground() {
    const ref =useRef(null);
    const data = [
      {
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        filesize: "0.4mb",
        Close: true,
        tag: {
          isOpen: true,
          tagtitle: "Done",
          tagcolor: "green",
        },
      },
      {
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        filesize: "0.4mb",
        Close: true,
        tag: {
          isOpen: true,
          tagtitle: "Done",
          tagcolor: "green",
        },
      },
      {
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        filesize: "0.4mb",
        Close: true,
        tag: {
          isOpen: true,
          tagtitle: "Done",
          tagcolor: "green",
        },
      },
    ];
  return (
    <div ref={ref} className="fixed z-[3] w-full h-full flex flex-wrap gap-10 p-5">
        {data.map((item) => (
          <Cards data={item} reference={ref}/>
        ))}
    </div>
  );
}

export default Foreground;
