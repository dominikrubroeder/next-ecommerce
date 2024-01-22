export default function Footer() {
  return (
    <footer className="border-t p-4 text-center text-xs">
      Fun Project, nothing commercial. Building a sample headless Frontend with
      Vercel&apos;s Next.js for a good and smooth ecommerce experience | Dominik
      Rubröder | GitHub
      <div>
        &copy; All rights go to their respective owners.
        <span className="ml-1">{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
