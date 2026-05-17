export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative overflow-hidden
        border-t border-white/10
        bg-[var(--bg)]
      "
    >
      {/* Glow Effect */}
      <div
        className="
          absolute left-1/2 top-0
          h-40 w-40 -translate-x-1/2
          rounded-full blur-3xl
          opacity-20
          bg-[var(--primary)]
        "
      />

      {/* Container */}
      <div
        className="
          relative z-10
          mx-auto flex max-w-7xl
          flex-col items-center
          justify-between gap-6
          px-6 py-10
          md:flex-row
        "
      >
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2
            className="
              text-2xl font-black tracking-[0.25em]
              text-[var(--text-primary)]
            "
          >
            KRIZTIANZ
          </h2>

          <p
            className="
              mt-2 text-sm
              text-[var(--text-secondary)]
            "
          >
            Front-End Developer
          </p>
        </div>

        {/* CENTER NAV */}
        <nav
          className="
            flex items-center gap-6
            text-sm font-medium
          "
        >
          <a
            href="#about"
            className="
              transition duration-300
              hover:text-[var(--primary)]
            "
          >
            About
          </a>

          <a
            href="#projects"
            className="
              transition duration-300
              hover:text-[var(--primary)]
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
              transition duration-300
              hover:text-[var(--primary)]
            "
          >
            Contact
          </a>
        </nav>

        {/* RIGHT */}
        <div
          className="
            text-center text-sm
            text-[var(--text-secondary)]
            md:text-right
          "
        >
          <p>
            Created by{" "}
            <a
              href="https://ccldev.com/"
              target="_blank"
              rel="noreferrer"
              className="
                font-semibold
                text-[var(--primary)]
                transition hover:opacity-80
              "
            >
              ccldev.com
            </a>
          </p>

          <p className="mt-1">
            © 2026 Christian Castaneda
          </p>
        </div>
      </div>
    </footer>
  );
}