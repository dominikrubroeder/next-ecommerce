export default function Footer() {
  return (
    <footer className="space-y-2 border-t p-4 text-center text-xs">
      <p>
        Fun Project, not for commercial use – Showcase and Demo purposes only.
      </p>

      <p>
        Building a sample headless Frontend with Vercel&apos;s Next.js for a
        good and smooth ecommerce experience
      </p>

      <p>Dominik Rubröder | GitHub</p>

      <div>
        &copy; All image rights go to their respective owners.
        <span className="ml-1">{new Date().getFullYear()}.</span>
      </div>
    </footer>
  );
}
