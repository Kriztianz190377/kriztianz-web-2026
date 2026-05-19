import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
// import CVpdf from "../../assets/docs/ChristianC-CV.pdf";

export default function Socials() {
  return (
 <div
  className="
    fixed
    bottom-5 right-3
    z-50
    lg:right-8
    lg:top-1/2
    lg:bottom-auto
    lg:-translate-y-1/2
  "
>
  <ul className="flex flex-col gap-3 lg:gap-4">
        <li>
          <a
            href="https://www.linkedin.com/in/christian-castaneda-cclweb/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--text-primary)] backdrop-blur-md transition hover:-translate-y-1 hover:text-[var(--primary)]"
          >
            <FaLinkedin size={24} />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Kriztianz190377"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--text-primary)] backdrop-blur-md transition hover:-translate-y-1 hover:text-[var(--primary)]"
          >
            <FaGithub size={24} />
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--text-primary)] backdrop-blur-md transition hover:-translate-y-1 hover:text-[var(--primary)]"
          >
            <HiOutlineMail size={26} />
          </a>
        </li>

        <li>
          <a
            // href={CVpdf}
            href="#"
            download
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--text-primary)] backdrop-blur-md transition hover:-translate-y-1 hover:text-[var(--primary)]"
          >
            <BsPersonLinesFill size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
}