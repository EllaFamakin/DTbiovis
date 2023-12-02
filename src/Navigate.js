import React from "react";
// import {Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navigate() {
  return (
    <nav className={"nav"} id="navbar_dt">
      DTBIOVIS
    </nav>
  );
}

// function CustomLink({ to, children, ...props}) {
// const resolvedPath = useResolvedPath(to)
// const isActive = useMatch({ path: resolvedPath.pathname, end: true })
// return (
//     <li className= {isActive ? "active" : ""}>
//        <Link to= {to} {...props}>
//         {children}
//         </Link>
//     </li>
// )
// }
