import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About us",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

type Props = {
  customHeaderWrapperClass?: string;
};

const Navbar: FC<Props> = ({ customHeaderWrapperClass }) => {
  const router = useRouter();

  function isLinkActive(href: string) {
    console.log(router.asPath, href);
    const isLinkActive = router.asPath === href;
    return isLinkActive ? "active" : "";
  }
  return (
    <header className={`header-area ${customHeaderWrapperClass}`}>
      <Link href="/" className="logo-area">
        <img src="img/logo-2.png" width={140} alt="" />
      </Link>
      <div className="nav-switch">
        <i className="fa fa-bars"></i>
      </div>
      <div className="phone-number">+675 334 567 223</div>
      <nav className="nav-menu">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.title} className={isLinkActive(link.href)}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
