import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Me - Shiksha Siag",
  description:
    "Get in touch with Shiksha Siag for inquiries, feedback, or collaboration opportunities. She’s always open to connecting and discussing new ideas!",
  keywords: [
    "contact Shiksha Siag",
    "contact form",
    "collaboration opportunities",
    "web development inquiries",
    "frontend development",
    "feedback",
    "web design",
  ],
  openGraph: {
    title: "Contact Me - Shiksha Siag",
    description:
      "Get in touch with Shiksha Siag for inquiries, feedback, or collaboration opportunities. She’s always open to connecting and discussing new ideas!",
    url: "http://localhost:3000/contact",
    type: "website",
  },
  metadataBase: new URL("http://localhost:3000/contact"),
  alternates: {
    canonical: "/contact",
  },
};
export default function page() {
  return <Contact />;
}
