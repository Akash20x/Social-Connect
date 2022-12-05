import React from "react";
import { useLocation } from "react-router-dom";
import { constants } from "../helpers";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer
      className={`bg-slate-800 px-4 py-2 flex justify-center items-center gap-1 flex-col w-full  md:mb-0 ${
        pathname === "/login" || pathname === "/signup"
          ? " fixed bottom-0 left-0 right-0 mb-0"
          : "mb-14"
      } `}
    >
      <p className="md:text-xl text-md text-slate-300 text-center">
        Created By{" "}
        <a
          href="https://github.com/Akash20x"
          rel="noreferrer"
          target="_blank"
          className="hover:text-slate-50 transition duration-200 text-accent-1-light"
        >
          {`<Akash/>`}
        </a>
      </p>
      <section className="flex justify-center gap-4 items-center">
        <p className="text-slate-200 md:text-xl text-md">Made using </p>
        <section className="flex justify-center items-center gap-4">
          <img
            className="md:w-10 md:h-10 w-5 h-5"
            src={constants.imgUrls.reactLogo}
            alt="react"
          />
          <img
            className="md:w-10 md:h-10 w-5 h-5"
            src={constants.imgUrls.firebaseLogo}
            alt="firebase"
          />
          <img
            className="md:w-10 md:h-10 w-5 h-5"
            src={constants.imgUrls.reduxLogo}
            alt="reduxtoolkit"
          />
          <img
            className="md:w-10 md:h-10 w-5 h-5"
            src={constants.imgUrls.tailwindLogo}
            alt="tailwindcss"
          />
        </section>
      </section>
    </footer>
  );
};

export default Footer;
