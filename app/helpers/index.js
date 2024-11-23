export const Projects = [
  {
    title: "Sentiment Analysis",
    description: `Provide us with any text, and our AI will analyze it to determine its
        sentiment. We'll give you a rating and let you know if it's
        positive, negative, or neutral!`,
    url: "https://sentiment-analysis-two-wine.vercel.app/",
  },
  {
    title: "Profanity Filter",
    description: `An advanced profanity filter designed to ensure clean and respectful content by detecting and removing inappropriate language in real-time. Perfect for applications requiring content moderation and user-generated content filtering.`,
    url: "https://profanity-filter-three.vercel.app/",
  },
  {
    title: "Deezer - Nextjs",
    description: `Deezer Next.js app integrates Deezer's music streaming service with a dynamic, user-friendly interface, allowing seamless access to music, playlists, and personalized recommendations.`,
    url: "https://deezer-nextjs.vercel.app/",
  },
];

export const Interests = ["Design", "Development", "Support", "Other"];

export const NavItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Me",
    path: "/about",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Resume",
    path: "/resume",
  },
  {
    title: "Contact Me",
    path: "/contact",
  },
];

export const Blogs = [
  {
    title: "The Future of AI: Transforming Everyday Life",
    slug: "future-of-ai-transforming-everyday-life",
    imageUrl: "/future-artificial-intelligence.avif",
    description:
      "Artificial Intelligence (AI) is no longer a concept confined to science fiction; it has become a pivotal part of our lives. From virtual assistants to groundbreaking applications in healthcare",
    content: `
      <article>
        <section>
            <h2>
            <strong>Introduction</strong>
            </h2>
            <p>Artificial Intelligence (AI) is no longer a concept confined to science fiction; it has become a pivotal part of our lives. From virtual assistants to groundbreaking applications in healthcare, AI is reshaping the world as we know it.</p>
        </section>
        <section>
            <h2>
            <strong>How AI Is Transforming Life</strong>
            </h2>
            <br/>
            <h3>
            <strong>Smart Assistants</strong>
            </h3>
            <p>Virtual assistants like Siri, Alexa, and Google Assistant are helping users manage tasks, control smart homes, and access information with ease.</p>
            <br/>
            <img class="rounded-md shadow" src="/user-settings-reminder.webp" alt="user-settings-reminder"  />
            <br />
            <h3>
            <strong>Revolutionizing Healthcare</strong>
            </h3>
            <p>AI is aiding in early disease detection, personalizing treatment plans, and even conducting surgeries with robotic precision. Machine learning algorithms are helping doctors diagnose illnesses faster and more accurately.</p>
            <br />
            <img class="w-full rounded-md shadow" src="/ai-driven.webp" alt="ai-driven"  />
            <br />
            <h3>
            <strong>Creative Industries</strong>
            </h3>
            <p>AI tools like DALL-E and ChatGPT are revolutionizing creative fields, enabling the generation of art, music, and writing with unprecedented quality.</p>
            <br />
            <iframe class="w-full rounded-md shadow" width="560" height="315" src="https://www.youtube.com/embed/aeorC8-FtNM?si=WCdoXppj7kI-dwE3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <br/>
        <section>
            <h2>
            <strong>Challenges in AI</strong>
            </h2>
            <ul class="list-disc ml-8">
                <li>Ethical concerns, such as biases in algorithms.</li>
                <li>Privacy concerns in data collection and usage.</li>
            </ul>
        </section>
        <section>
            <h2>
            <strong>Conclusion</strong>
            </h2>
            <p>AI is here to stay and grow. By addressing its challenges, we can ensure it continues to be a force for good, improving lives and industries alike.</p>
        </section>
    </article>
    `,
  },
  {
    title: "Web Development in 2024: Trends You Should Know",
    description:
      "Web development is an ever-evolving field, and staying updated with the latest trends is crucial for developers",
    slug: "web-development-2024-trends",
    imageUrl: "/web_dev.png",
    content: `
    <article>
        <section>
            <h2>Introduction</h2>
            <p>Web development is an ever-evolving field, and staying updated with the latest trends is crucial for developers. Here's a look at what's shaping the industry in 2024.</p>
        </section>

        <section>
            <h2>Top Trends</h2>
            <br/>
            <h3>Next.js Dominance</h3>
            <p>As a powerful React framework, Next.js continues to lead with features like server-side rendering (SSR) and API routes. It’s perfect for performance-driven applications.</p>
            <br/>
            <img class="w-full rounded-md shadow" src="/nextjs-structure.png" alt="nextjs-structure"  />
            <br/>
            <br/>
            <h3>Rise of Serverless Computing</h3>
            <p>Developers are increasingly relying on serverless platforms like Vercel and AWS Lambda for scalable, cost-effective solutions.</p>
            <br/>
            <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/yLMODEUPJdU?si=b5ZyC6RuTR9krlky" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br/>
            <br/>
            <h3>Web3 and Decentralization</h3>
            <p>Decentralized applications (dApps) are gaining traction, allowing users to interact with blockchain technology through the web.</p>
            <br/>
              <img class="w-full rounded-md shadow" src="/ehterium.jpg" alt="ehterium" />
            <br/>
            <br/>
            <h3>Focus on Accessibility and Performance</h3>
            <p>Web accessibility is no longer optional. Tools like Lighthouse ensure that websites are optimized for all users.</p>
            <br/>
            <img src="/google-lighthouse-loadfocus-report.jpeg" alt="google-lighthouse-loadfocus-report" />
            <br/>
        </section>
        <section>
            <h2>Conclusion</h2>
            <p>Web development in 2024 emphasizes performance, scalability, and user accessibility. Staying updated with these trends is essential for building future-ready applications.</p>
        </section>
    </article>
    `,
  },
  {
    title: "Cybersecurity Essentials: Protect Yourself Online",
    description:
      "With our increasing reliance on digital platforms, cybersecurity has become more important than ever. Cyber threats like phishing",
    slug: "cybersecurity-essentials-protect-yourself-online",
    imageUrl: "/cybersecurity_vs_information_security_illustration.jpg",
    content: `
     <article>
        <section>
            <h2>Introduction</h2>
            <p>With our increasing reliance on digital platforms, cybersecurity has become more important than ever. Cyber threats like phishing, ransomware, and data breaches are on the rise, but you can take steps to protect yourself.</p>
        </section>
        <section>
            <h2>Common Threats</h2>
            <br/>
            <h3>Phishing Attacks</h3>
            <p>Fraudulent emails or messages trick users into providing sensitive information like passwords and credit card numbers.</p>
            <br/>
            <img class="rounded-md shadow" src="/how-to-spot-a-phishing-email.jpg" alt="how-to-spot-a-phishing-email" />
            <br/>
            <h3>Ransomware</h3>
            <p>Malicious software that locks your data and demands a ransom for its release.</p>
            <br/>
             <img class="rounded-md shadow" src="/how-ransomware-actually-spreads-image-1.avif" alt="how-ransomware-actually-spreads-image-1" />
            <br/>
            <h3>Social Engineering</h3>
            <p>Hackers manipulate victims into divulging confidential information.</p>
        </section>

        <section>
            <h2>Tips to Stay Safe</h2>
            <br/>
            <h3>Use a Password Manager</h3>
            <p>Tools like LastPass or 1Password generate and store complex passwords securely.</p>
            <br/>
             <img class="rounded-md shadow" src="/1Password-Install.png" alt="1Password-Install" />
            <br/>
            <br/>
            <h3>Enable Two-Factor Authentication (2FA)</h3>
            <p>Add an extra layer of protection to your accounts with 2FA.</p>
            <br/>
            <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/JQ4RDxJtrGU?si=QIhI8AckCWHrKyHL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br/>
            <br/>
            <h3>Be Cautious with Emails</h3>
            <p>Verify senders and avoid clicking on suspicious links.</p>
        </section>

        <section>
            <h2>Emerging Trends in Cybersecurity</h2>
            <ul class="list-disc ml-8">
                <li><strong>Zero Trust Architecture:</strong> A "never trust, always verify" approach to security.</li>
                <li><strong>AI in Cybersecurity:</strong> Using machine learning to detect threats in real time.</li>
            </ul>
        </section>

        <section>
            <h2>Conclusion</h2>
            <p>Cybersecurity is a shared responsibility. By adopting these practices and staying informed, you can protect yourself from evolving threats.</p>
        </section>
    </article>
    `,
  },
];
