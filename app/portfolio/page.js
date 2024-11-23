import Project from "@/components/Project";
import { Projects } from "../helpers";

export const metadata = {
  title: "Portfolio - Shiksha Siag",
  description:
    "Explore Shiksha Siag's portfolio to see a collection of her work, projects, and creative endeavors. From design and development to problem-solving, discover how she brings ideas to life through her work.",
  keywords: [
    "Shiksha Siag portfolio",
    "web development portfolio",
    "frontend development",
    "React projects",
    "Next.js projects",
    "UI/UX design",
    "web design",
    "problem-solving",
    "creative projects",
    "portfolio",
  ],
  openGraph: {
    title: "Portfolio - Shiksha Siag",
    description:
      "Explore Shiksha Siag's portfolio to see a collection of her work, projects, and creative endeavors. From design and development to problem-solving, discover how she brings ideas to life through her work.",
    url: "http://localhost:3000/portfolio",
    type: "website",
  },
  metadataBase: new URL("http://localhost:3000/portfolio"),
  alternates: {
    canonical: "/portfolio",
  },
};
export default function page() {
  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          My Projects
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Whether you have a concept waiting to be realized or a website in need
          of a makeover, I’m here to transform your digital vision into reality.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {Projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
