"use client";

import { useState } from "react";
import Link from "next/link";

const links = [["Practice", "/#services"], ["Work", "/work"], ["Experience", "/experience"], ["Contact", "/#contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="Escherbridge home"><span>ESCHER</span><span>BRIDGE</span></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>{open ? "CLOSE ×" : "MENU +"}</button>
    <nav id="primary-nav" className={open ? "is-open" : ""}>{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}</nav>
    <span className="header-mark" aria-hidden="true">EB—26</span>
  </header>;
}
