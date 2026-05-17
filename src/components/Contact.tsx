import { useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const contactLinks = [
  {
    label: "Email",
    text: "Send me an email",
    href: "mailto:your-email@gmail.com",
    icon: <MdOutlineEmail />,
  },
  {
    label: "GitHub",
    text: "Visit my GitHub profile",
    href: "https://github.com/Kriztianz190377",
    icon: <BsGithub />,
  },
  {
    label: "LinkedIn",
    text: "Connect with me",
    href: "#",
    icon: <BsLinkedin />,
  },
  {
    label: "WhatsApp",
    text: "Message me on WhatsApp",
    href: "#",
    icon: <BsWhatsapp />,
  },
];

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
// TODO: fix key in ENV
    emailjs
      .sendForm(
        "service_t7n0w8a",
        "template_j67vxnv",
        formRef.current,
        "pPXM2ktdd2EUaQtT2"
      )
      .then(
        () => {
          alert("Message sent successfully");
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Message could not be sent");
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-text-primary">
            Let&apos;s work together
          </h2>

          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Have a project, collaboration or opportunity in mind? Send me a
            message and I will get back to you.
          </p>
        </header>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="
                rounded-[2rem]
                border
                border-[var(--border)]
                bg-card
                p-8
                transition
                duration-500
                hover:-translate-y-2
                hover:border-primary
                "
              >
                <div className="text-4xl text-primary">{item.icon}</div>

                <h3 className="mt-6 text-2xl font-bold text-text-primary">
                  {item.label}
                </h3>

                <p className="mt-3 text-text-secondary">{item.text}</p>
              </a>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="
            rounded-[2rem]
            border
            border-[var(--border)]
            bg-card
            p-8
            "
          >
            <div className="grid gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-bg
                px-5
                py-4
                text-text-primary
                outline-none
                transition
                focus:border-primary
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-bg
                px-5
                py-4
                text-text-primary
                outline-none
                transition
                focus:border-primary
                "
              />

              <input
                type="text"
                name="phone"
                placeholder="Mobile"
                className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-bg
                px-5
                py-4
                text-text-primary
                outline-none
                transition
                focus:border-primary
                "
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={7}
                required
                className="
                resize-none
                rounded-2xl
                border
                border-[var(--border)]
                bg-bg
                px-5
                py-4
                text-text-primary
                outline-none
                transition
                focus:border-primary
                "
              />

              <button
                type="submit"
                className="
                rounded-2xl
                bg-primary
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:-translate-y-1
                hover:shadow-glow
                "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};