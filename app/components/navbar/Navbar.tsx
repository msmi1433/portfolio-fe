import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1>Myles</h1>
      <nav className="flex justify-between gap-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/portfolio"}>Portfolio</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
