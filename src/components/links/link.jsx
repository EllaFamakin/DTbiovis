import React, { useEffect, useRef } from "react";
import "./index.css";

// The code below contains the functionality of all links in the webpage
export function InlineLink({ to, children }) {
  return (
    <a href={to} className="link">
      {children}
    </a>
  );
}

export function AnchorLink({ to, children }) {
  const anchorRef = useRef();

  const smoothScroll = (e) => {
    e.preventDefault();
    const selector = anchorRef.current.getAttribute("href");
    const element = document.getElementById("navbar_dt");
    const top =
      document.querySelector(selector).getBoundingClientRect().top -
      element.getBoundingClientRect().height +
      window.scrollY;
    window.scrollTo({ behavior: "smooth", top: top });
  };

  useEffect(() => {
    anchorRef.current.addEventListener("click", smoothScroll);
  }, [anchorRef]);

  return (
    <a ref={anchorRef} href={to} className="link">
      {children}
    </a>
  );
}
