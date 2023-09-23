import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const atags = links.map(link => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })
  return <nav>
    {atags}
  </nav>;
}

export default NavBar;
