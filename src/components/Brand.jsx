import React from "react";
import { Link } from "react-router-dom";
import { constants } from "../helpers";

const Brand = ({large, medium }) => {
  return (
    <header>
      <Link to={"/feed"} className="flex justify-start items-center gap-2">
        <img
          src={constants.imgUrls.appLogo}
          alt="app logo"
          className={`${large ? "w-24 h-24" : "w-10 h-10"} ${
            medium ? "w-16 h-16" : "w-10 h-10"
          }`}
        />
        <span
          className={`font-satisfy font-bold hidden md:block text-transparent ${
            large ? "text-7xl " : "text-4xl"
          }
          ${
            medium ? "text-6xl " : "text-4xl"
          }  p-1 bg-clip-text bg-gradient-to-r from-cta-dark to-accent-1`}
        >
          SocialConnect
        </span>
      </Link>
    </header>
  );
};

export default Brand;
