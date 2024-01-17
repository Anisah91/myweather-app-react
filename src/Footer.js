import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Weather.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small className="footer mt-4">
        This project was coded by Anisa Mohamud and it is {""}
        <a
          href="https://github.com/Anisah91/myweather-app-react"
          target="_blank"
          rel="noreferrer">
          Open-source code
        </a>{" "}
        {""}
        on Github & hosted on {""}
        <a
          href="https://app.netlify.com/teams/anisah91/overview"
          target="_blank"
          rel="noreferrer">
          Netlify
        </a>
      </small>
    </div>
  );
}
