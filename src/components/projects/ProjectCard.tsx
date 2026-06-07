import type { ProjectCardProps } from "../../types";
import { BsGithub } from "react-icons/bs";

export const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  websiteUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col h-full items-center gap-5">
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />
      </a>

      <h3 className="text-2xl font-bold hover:text-primary transition duration-300">
        {title}
      </h3>

      <p className="text-xl text-gray-500 font-bold">
        {subtitle}
      </p>

      <div className="h-28">
        <p
          className="text-center line-clamp-4"
          title={description}
        >
          {description}
        </p>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto"
      >
        <BsGithub
          className="
            text-red-600
            text-6xl
            hover:scale-110
            transition
            duration-300
          "
        />
      </a>
    </article>
  );
};