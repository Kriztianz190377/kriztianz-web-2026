import Socials from "./Socials";


export const Hero = () => {

  return (

    <main
      id="about"
      className="
      min-h-screen
      px-6
      pt-56
      "
    >

      <section
        className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        lg:grid-cols-2
        "
      >
<Socials />
        {/* =========================
            LEFT SIDE
        ========================== */}

        <div>
         

          <span
            className="
            mb-6
            inline-flex
            rounded-full
            border
            border-[var(--border)]
            bg-card
            px-5
            py-2
            text-sm
            font-semibold
            text-primary
            "
          >
            Front-End Developer
          </span>

          <h1
            className="
            max-w-4xl
            text-5xl
            font-extrabold
            leading-tight
            tracking-tight
            text-text-primary
            md:text-7xl
            "
          >
            Hi, I'm{" "}

            <span className="text-primary">
              Christian Castaneda
            </span>

          </h1>
          {/* =========================
              ABOUT
          ========================== */}

          <p
            className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-text-secondary
            "
          >
            I build modern, responsive and engaging web
            experiences using React, TypeScript,
            Tailwind CSS and Laravel.
          </p>
           <p
            className="
            mt-5
            leading-8
            text-text-secondary
            "
          >
            I am a front-end developer focused on creating
            clean, accessible and responsive interfaces.
            My work combines modern UI design with solid
            development practices.
          </p>

          <div
            className="
            mt-8
            flex
            flex-wrap
            gap-4
            "
          >

            <a
              href="#projects"
              className="
              rounded-2xl
              bg-primary
              px-7
              py-4
              font-semibold
              text-white
              transition
              hover:-translate-y-1
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
              rounded-2xl
              border
              border-[var(--border)]
              bg-card
              px-7
              py-4
              font-semibold
              text-text-primary
              transition
              hover:-translate-y-1
              "
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div
          className="
          rounded-[2rem]
          border
          border-[var(--border)]
          bg-card
          p-8
          shadow-glow 
          flex
          flex-col items-center
          "
        >

          {/* =========================
              PHOTO
          ========================== */}

          <div
            className="
            relative
            flex
            justify-center
            max-w-[240px]
                        "
          >

            <div
              className="
              absolute
              h-72
              w-72
              rounded-full
              bg-primary/30
              blur-3xl
              
              "
            />

            <img
              src="/img/ME.png"
              alt="Christian Castaneda"
              className="
              relative
              z-10
              w-full
              max-w-md
              object-contain
              "
            />

          </div>

          

        

         

          {/* =========================
              SKILLS
          ========================== */}

          <div
            className="
            mt-8
            flex
            flex-wrap
            gap-3
            "
          >

            {[
              "React",
              "TypeScript",
              "Tailwind",
              "Laravel",
              "Vite",
            ].map((skill) => (

              <span
                key={skill}
                className="
                rounded-full
                border
                border-[var(--border)]
                px-4
                py-2
                text-sm
                font-semibold
                text-primary
                "
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </section>

    </main>

  );
};