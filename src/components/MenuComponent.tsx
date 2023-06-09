import * as React from "react";
import "./dist/MenuComponent.css";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

function MenuComponent(props: Props) {
  return (
    <>
      <nav className="flex justify-items-center ">
        <ul className="justify-items-center hidden md:flex ">
          <li className="flex">
            <Link to="/" className={props.className}>
              Home
            </Link>
          </li>
          <li className="flex">
            <Link to="/layanan" className={props.className}>
              Layanan Kami
            </Link>
          </li>
          <li className="flex">
            <Link to="/portfolio" className={props.className}>
              Galeri Kami
            </Link>
          </li>
          <li className="flex">
            <Link to="/affiliator" className={props.className}>
              Join Affiliator
            </Link>
          </li>
          <li className="flex">
            <Link to="/contact" className={props.className}>
              Hubungi Kami
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuComponent;
