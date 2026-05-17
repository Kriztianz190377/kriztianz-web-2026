import { BsGithub } from "react-icons/bs";




const projects = [
    {
        title: "Guitar La",
        subtitle: "TypeScript - React.Js",
        description:
            "Music ecommerce project built with React, TypeScript and Tailwind CSS.",
        image: "/img/guitar.webp",
        alt: "Guitar La project preview",
        websiteUrl: "http://guitare-la.ccldev.com/",
        githubUrl: "https://github.com/Kriztianz190377/GuitarLa?tab=readme-ov-file",
        stack: ["React", "TypeScript", "Tailwind"],
    },
    {
        title: "Tip Calculator",
        subtitle: "TypeScript - React.Js",
        description:
            "Responsive tip calculator application focused on clean UI and user experience.",
        image: "/img/tip-calculator.webp",
        alt: "Tip Calculator project preview",
        websiteUrl: "https://tip-calculator.ccldev.com/",
        githubUrl: "https://github.com/Kriztianz190377/tip-calculator",
        stack: ["React", "TypeScript", "Vite", "Tailwind"],
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="px-6 py-32">
            <div className="mx-auto max-w-7xl">
                <header className="max-w-3xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Projects
                    </span>

                    <h2 className="mt-4 text-5xl font-extrabold text-text-primary">
                        Featured Work
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-text-secondary">
                        A selection of projects focused on responsive interfaces, modern UI
                        systems and front-end development.
                    </p>
                </header>

                <div className="mt-20 grid gap-10 lg:grid-cols-2">

                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="
              group
    overflow-hidden
    rounded-[2rem]
    border
    border-[var(--border)]
    bg-[var(--card)]
    transition-all
    transition-colors
    duration-500
    hover:-translate-y-2
    hover:border-[var(--primary)]
              "
                        >
                            <a
                                href={project.websiteUrl}
                                target="_blank"
                                className="
  flex
    h-72
    items-center
    justify-center
    bg-[var(--bg)]
    transition-colors
    duration-500
  "
                            >
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="
    
                            max-h-full
                            w-full
                            object-fit    
                            transition
                            duration-700
                            group-hover:scale-105
                            
                            
                            "
                                />
                            </a>

                            <div className="p-8">
                                <p className="text-sm font-semibold text-primary">
                                    {project.subtitle}
                                </p>

                                <h3 className="mt-4 text-3xl font-bold text-text-primary">
                                    {project.title}
                                </h3>

                                <p className="mt-5 leading-8 text-text-secondary">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="
                      rounded-full
                      border
                      border-[var(--border)]
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-primary
                      "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 flex items-center justify-between gap-4">
                                    <a
                                        href={project.websiteUrl}
                                        target="_blank"
                                        className="font-semibold text-primary transition hover:opacity-80"
                                    >
                                        Visit Project →
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="
                    rounded-full
                    border
                    border-[var(--border)]
                    p-3
                    text-text-primary
                    transition
                    hover:-translate-y-1
                    hover:text-primary
                    "
                                    >
                                        <BsGithub />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};