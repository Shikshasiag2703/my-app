import Link from "next/link";

export const metadata = {
  title: "Resume - Shiksha Siag",
  description:
    "Explore Shiksha Siag's resume to learn about her professional experience, skills, and qualifications. Discover how she combines her passion for design and development to deliver impactful results.",
  keywords: [
    "Shiksha Siag resume",
    "frontend developer resume",
    "web developer resume",
    "React developer",
    "Next.js developer",
    "UI/UX designer",
    "professional experience",
    "web development skills",
    "resume",
  ],
  openGraph: {
    title: "Resume - Shiksha Siag",
    description:
      "Explore Shiksha Siag's resume to learn about her professional experience, skills, and qualifications. Discover how she combines her passion for design and development to deliver impactful results.",
    url: "http://localhost:3000/resume",
    type: "website",
  },
  metadataBase: new URL("http://localhost:3000/resume"),
  alternates: {
    canonical: "/resume",
  },
};

export default function page() {
  return (
    <section id="resume" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          My Resume
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Whether you have a concept waiting to be realized or a website in need
          of a makeover, I’m here to transform your digital vision into reality.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-8">
            <div className="flex items-center gap-4">
              <div className="relative flex flex-col bg-clip-border bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth="2"
                >
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                </svg>
              </div>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
                Bachelor of Science in Computer Science
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex flex-col bg-clip-border bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth="2"
                >
                  <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z"></path>
                </svg>
              </div>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
                Certified Web Developer{" "}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex flex-col bg-clip-border bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth="2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
                Frontend Framework Proficiency Certification
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-20 flex items-center justify-center">
          <Link href="/SHI Coop.pdf" dowload="SHI Coop.pdf" target="_blank">
            <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
