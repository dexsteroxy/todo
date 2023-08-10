import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

function Succes({successMsg}) {
  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity:1}}
    transition={{
        y: {type: "spring", stiffness: 120}
    }}
     className=" absolute shadow-md font-poppins tracking-wide font-medium text-sm bottom-10 left-[30%] bg-amazon_blue px-10 py-4 rounded-sm border-b-[6px] border-b-green-600 text-green-500">
      <p className=" flex items-center gap-4">
        {" "}
        <span>
          <RotatingLines
            strokeColor="green"
            strokeWidth="5"
            animationDuration="0.75"
            width="40"
            visible={true}
          />
        </span>
        {successMsg}
      </p>
    </motion.div>
  );
}

export default Succes;