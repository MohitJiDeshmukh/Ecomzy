import React from "react";
import { PuffLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <PuffLoader
        color="#28e5ec"
        cssOverride={{}}
        loading
        speedMultiplier={2}
      />
    </div>
  );
};

export default Spinner;
