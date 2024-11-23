import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My App - Shiksha Siag",
  description:
    "Welcome to Shiksha Siag's portfolio! Explore her projects, skills, and achievements as a Web Developer and discover how she can help bring your ideas to life.",
  keywords: [
    "Shiksha Siag portfolio",
    "web developer portfolio",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "UI/UX designer",
    "web development projects",
    "professional achievements",
    "web design",
    "web applications",
  ],
  openGraph: {
    title: "My App - Shiksha Siag",
    description:
      "Welcome to Shiksha Siag's portfolio! Explore her projects, skills, and achievements as a Web Developer and discover how she can help bring your ideas to life.",
    url: "http://localhost:3000",
    type: "website",
  },
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
