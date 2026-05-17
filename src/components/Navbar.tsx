import { useState } from "react";

type NavbarProps = {
  toggleTheme: () => void;
};
const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },

  {
    label: "Resume",
    href: "#resume",
  },
];
export const Navbar = ({ toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (

    <header
      className=" 
      mx-aut w-full
      fixed top-0 z-50 w-full
      border-b border-white/5
      bg-bg/70
      backdrop-blur-xl
      "
    >

      <div
        className="container 
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
        "
      >

        <div className="logo">

          <a href="#">

            <img
              src="/img/ccl-logo-desktop.webp"
              alt="Logo de ccldev"
              className="w-14"
            />

          </a>

        </div>

        <nav
          className="
          md:flex
          items-center
          gap-7
          hidden
          
          "
        >

          {navLinks.map((link) => (

            <a
              key={link.label}
              href={link.href}
              className="
      text-sm
      font-medium
      text-text-secondary
      transition
      duration-300
      hover:text-primary
      "
            >
              {link.label}
            </a>

          ))}

          <button
            onClick={toggleTheme}
            className="
            rounded-xl
            border
            border-white/10
            bg-card
            px-4
            py-3
            font-semibold
            text-text-primary
            transition
            duration-300
            hover:-translate-y-1
            hover:scale-105
            "
          >
            🌙 / ☀️
          </button>

        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
  flex
  md:hidden
  items-center
  justify-center
  rounded-xl
  border
  border-white/10
  bg-card
  p-3
  "
        >
          ☰
        </button>

      </div>
      {
  isMenuOpen && (

    <div
      className="
      md:hidden
      border-t
      border-white/10
      bg-card
      "
    >

      <nav
        className="
        flex
        flex-col
        gap-6
        px-6
        py-8
        "
      >

        {navLinks.map((link) => (

          <a
            key={link.label}
            href={link.href}
            className="
            text-center
            text-lg
            font-medium
            text-text-secondary
            transition
            hover:text-primary
            "
          >
            {link.label}
          </a>

        ))}

      </nav>

    </div>

  )
}

    </header>
  );
};