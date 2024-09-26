import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="wrapper flexCenter" style={{ height: "60vh" }}>
      <HashLoader
        height="80"
        width="80"
        radius={1}
        aria-label="ring-loading"
        color="#4066ff"
      />
    </div>
  );
};

export default Loading;
