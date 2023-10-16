import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <Link href={"/"}>
        <Image src={"/ms-logo.svg"} alt="website-logo" height={75} width={75} />
      </Link>
      <nav className="flex justify-between gap-4 xl:gap-10">
        <Link
          href={"mailto:mylesbsmith96@gmail.com"}
          className="hover:text-periwinkle transition-colors"
        >
          Email
        </Link>
        <Link
          href={"https://github.com/msmi1433"}
          target="_blank"
          className="hover:text-periwinkle transition-colors"
        >
          GitHub
        </Link>
        <Link
          href={"https://www.linkedin.com/in/myles-smith-a96163198/"}
          target="_blank"
          className="hover:text-periwinkle transition-colors"
        >
          LinkedIn
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
