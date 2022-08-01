import React, { useState } from "react";
import LoaderContext from "./LoaderContext";
import Loader from "./Loader";
const MyLayout = ({ children }) => {
  const [loaderDidRun, setLoaderDidRun] = useState(false);

  return (
    <LoaderContext.Provider value={[loaderDidRun, setLoaderDidRun]}>
      {children}
    </LoaderContext.Provider>
  );
};

export default MyLayout;
