import Link from "next/link";

export function Footer() {
  return <footer className="site-footer">
    <Link className="wordmark" href="/"><span>ESCHER</span><span>BRIDGE</span></Link>
    <p>Independent product engineering by Ahmed Zaher.</p>
    <div><a href="https://github.com/Escherbridge" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/ahmedux/" target="_blank" rel="noreferrer">LinkedIn ↗</a><Link href="/partners">Partners ↗</Link><a href="https://www.upwork.com/agencies/2012509889332821989/" target="_blank" rel="noopener">Hire us on Upwork ↗</a></div>
    <small>© {new Date().getFullYear()} / SOFTWARE WITH A POINT OF VIEW</small>
  </footer>;
}
