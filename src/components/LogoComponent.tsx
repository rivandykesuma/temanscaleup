import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../pages/dist/img/logo.svg";

interface Props {
  className?: string;
}

export default function LogoComponent(props: Props) {
  // const logo = require("../pages/dist/img/logo.png");
  return (
    <div>
      <Link to="/" className="flex">
        {/* <img src={logo} alt="Teman ScaleUp" className={props.className} /> */}
        <Logo className={props.className} />
      </Link>
    </div>
  );
}
