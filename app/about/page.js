import Image from "next/image";

export const metadata = {
  title: "About Me - Shiksha Siag",
  description:
    "Discover the journey of Shiksha Siag, a passionate frontend developer, and digital architect. Explore her skills, experiences, and dedication to creating engaging and functional web solutions.",
  keywords: [
    "Shiksha Siag",
    "frontend developer",
    "web developer",
    "digital architect",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "web optimization",
    "user-centric design",
    "functional web experiences",
    "professional portfolio",
  ],
  openGraph: {
    title: "About Me - Shiksha Siag",
    description:
      "Learn more about Shiksha Siag, a passionate frontend developer and digital architect. Discover her skills, experiences, and dedication to crafting engaging and functional web solutions.",
    url: "http://localhost:3000",
    type: "website",
  },
};

export default function page() {
  return (
    <section id="about-me" className="px-8 mt-20">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          About Me
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 text-left lg:w-10/12">
          Hi 👋, I'm Shiksha Siag, I'm not just a developer—she's a digital
          architect who transforms ideas into reality. With a passion for
          crafting beautiful and functional web experiences, Shiksha leverages
          cutting-edge technologies and best practices to design websites that
          captivate audiences and drive engagement. Her proficiency spans
          essential frontend technologies such as HTML5, CSS3, JavaScript, and
          modern frameworks like React and Next.js. With a strong focus on
          user-centric design, she creates interfaces that are both visually
          appealing and highly functional, ensuring seamless experiences for
          every user. Shiksha also emphasizes performance optimization,
          delivering fast, responsive websites and apps that not only enhance
          user satisfaction but also improve SEO rankings. She thrives on the
          challenge of building solutions that are as elegant as they are
          effective, proving that exceptional design and development go hand in
          hand.
        </p>
      </div>
      <div className="container mx-auto mb-20 text-center">
        <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
          My skills
        </p>
        <h1 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          What I do
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12">
          I’m not just a developer, I’m a digital architect. Designing seamless
          online experiences is my passion, not just my profession. Take a look
          below to see how I can help turn your ideas into reality.
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
              Crafting beautiful and functional web experiences is my specialty.
              By leveraging the latest technologies and industry best practices,
              I design and build websites that captivate audiences and drive
              engagement.
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
              My development is paired with a keen eye for design. I create user
              interfaces that are both functional and visually appealing,
              ensuring a seamless and enjoyable experience for every user.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
