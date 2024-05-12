import Link from "next/link";
import React, { FC } from "react";

type Props = {
  customHeaderWrapperClass?: string;
};

const Navbar: FC<Props> = ({ customHeaderWrapperClass }) => {
  return (
    <header className={`header-area ${customHeaderWrapperClass}`}>
      <a href="home.html" className="logo-area">
        <img src="img/logo-2.png" width={140} alt="" />
      </a>
      <div className="nav-switch">
        <i className="fa fa-bars"></i>
      </div>
      <div className="phone-number">+675 334 567 223</div>
      <nav className="nav-menu">
        <ul>
          <li className="active">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">About us</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
