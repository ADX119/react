import React from "react";
import { CiFileOn } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="relative flex-shrink-0 w-60 h-80 bg-zinc-700/90 rounded-[30px] text-white p-5 overflow-hidden "
    >
      <CiFileOn />
      <p className="font-semibold leading-tight m-4">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex item-center justify-between px-8 py-3">
          <h5>{data.filesize}</h5>
          {data.Close ? (
            <IoMdClose />
          ) : (
            <MdDownload size="0.7em" color="#fff" />
          )}
        </div>
        {data.tag.isOpen ? (
          <div className="progress w-full py-4 bg-green-200 text-black flex item-center justify-center font-semibold">
            <h3>{data.tag.tagtitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Cards;
