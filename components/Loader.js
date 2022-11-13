import React, { useContext, useState } from "react";
import LoaderContext from "./LoaderContext";
import Link from "next/link";

export default function Loader() {
  const [loaderDidRun] = useContext(LoaderContext);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-start px-4 sm:px-4 lg:px-4 pt-8 z-40 ${
        loaderDidRun ? "hidden" : "bg-reginald-gray h-full"
      }`}
    >
      <Link href="/about">
        <a className={`cursor-pointer hover:text-regi-red`}>
          <h1 className="text-sm md:text-md uppercase font-sans font-medium">
            Reginald Sylvester II
          </h1>
          <p className="text-sm md:text-md font-sans font-medium inline-block">
            B. 1987.
          </p>
        </a>
      </Link>
    </div>
  );
}
