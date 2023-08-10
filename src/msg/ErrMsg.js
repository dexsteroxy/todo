import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

function ErrMsg({errMssg}) {
  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity:1}}
    transition={{
        y: {type: "spring", stiffness: 120}
    }}
     className=" absolute shadow-md font-poppins tracking-wide font-medium text-sm top-2 left-[40%] bg-amazon_blue px-10 py-4 rounded-sm border-b-[6px] border-b-red-600 text-red-500">
      <p className=" flex items-center gap-4">
        {" "}
        <span>
          <RotatingLines
            strokeColor="red"
            strokeWidth="5"
            animationDuration="0.75"
            width="40"
            visible={true}
          />
        </span>
        {errMssg}
      </p>
    </motion.div>
  );
}

export default ErrMsg;
