import Image from "next/image";
import { Blogs, Projects } from "./helpers";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import BlogItem from "@/components/BlogItem";

export default function Home() {
  return (
    <div className="bg-white py-28 px-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
            Welcome to my Web <br /> Development Portofolio!
          </h1>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            I'm John Doe, a dedicated web developer. This is where you can
            explore my journey in the world of web development, blending
            creativity with functionality.
          </p>
        </div>
        <Image
          alt="team work"
          loading="lazy"
          width="1024"
          height="1024"
          decoding="async"
          data-nimg="1"
          className="h-[36rem] w-full rounded-xl object-cover"
          src="/portfolio.png"
        />
      </div>
      <section id="skills" className="px-8 mt-40">
        <div className="container mx-auto mb-20 text-center">
          <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
            My skills
          </p>
          <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
            What I do
          </h1>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12">
            I’m not just a developer, I’m a digital architect. Designing
            seamless online experiences is my passion, not just my profession.
            Take a look below to see how I can help turn your ideas into
            reality.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
            <div className="p-6 grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                <Image
                  src="/development.svg"
                  alt="development"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                Frontend Web Development:
              </h5>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                Crafting beautiful and functional web experiences is my
                specialty. By leveraging the latest technologies and industry
                best practices, I design and build websites that captivate
                audiences and drive engagement.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
            <div className="p-6 grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                <Image
                  src="/stack.svg"
                  alt="stack"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                Technology Stack
              </h5>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                I’m proficient in the most widely used frontend technologies,
                including HTML5, CSS3, JavaScript, and frameworks like React and
                Next.js.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
            <div className="p-6 grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                <Image
                  src="/hash.svg"
                  alt="hash"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                Web Optimization
              </h5>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                Performance is key. I optimize websites and apps for speed,
                ensuring a fast, responsive experience that enhances user
                satisfaction and improves SEO rankings.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
            <div className="p-6 grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                <Image
                  src="/eye.svg"
                  alt="eye"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                User-Centric Design
              </h5>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                My development is paired with a keen eye for design. I create
                user interfaces that are both functional and visually appealing,
                ensuring a seamless and enjoyable experience for every user.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-28 px-8">
        <div className="container mx-auto mb-20 text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
            My Projects
          </h2>
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
            Whether you have a concept waiting to be realized or a website in
            need of a makeover, I’m here to transform your digital vision into
            reality.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
          {Projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </section>
      <section id="blogs" className="pb-28 pt-20 px-8">
        <div className="container mx-auto mb-20 text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
            My Blogs
          </h2>
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
            Discover a collection of articles and stories that explore the art
            of creation, innovation, and problem-solving. Whether you're seeking
            inspiration or practical tips, my blogs are here to guide and
            inspire.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {Blogs.map((blog) => (
            <BlogItem key={blog.slug} {...blog} />
          ))}
        </div>
      </section>
      <Contact />
    </div>
  );
}
