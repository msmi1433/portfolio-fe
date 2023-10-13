import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Link href={"/"}>
        <h1>Myles</h1>
      </Link>
      <nav className="flex justify-between gap-10">
        <Link href={"mailto:mylesbsmith96@gmail.com"}>Email</Link>
        <Link href={"https://github.com/msmi1433"} target="_blank">
          GitHub
        </Link>
        <Link
          href={"https://www.linkedin.com/in/myles-smith-a96163198/"}
          target="_blank"
        >
          LinkedIn
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
