import React from "react";
import "./Weather.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small className="footer mt-5">
        This project was coded by Anisa Mohamud and is
        <a
          href="https://github.com/Anisah91/myweatherapp"
          target="_blank"
          rel="noreferrer">
          Open-source code
        </a>
        on Github & hosted on
        <a
          href="https://65144f359ad293000857d002--curious-twilight-219afa.netlify.app/"
          target="_blank"
          rel="noreferrer">
          Netlify
        </a>
      </small>
    </div>
  );
}
