import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { firm, fullAddress } from '@/lib/firm';

const NAV = [
  { href: '/practice-areas', label: 'Practice areas' },
  { href: '/cases', label: 'Cases' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
];

function Brand() {
  return (
    <Link href="/" className="brand" aria-label={`${firm.name} home`}>
      <Image src="/logo.png" alt="" width={35} height={32} priority />
      <span>{firm.name}</span>
    </Link>
  );
}

function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [router.asPath]);
  const current = (href) => (router.pathname === href ? 'page' : undefined);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Brand />
        <nav className="nav-desktop" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)}>{n.label}</Link>
          ))}
          <Link href="/contact" className="btn btn-primary btn-sm">Book a consultation</Link>
        </nav>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="nav-mobile" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)}>{n.label}</Link>
          ))}
          <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Brand />
          <p className="footer-note">Legal practitioners, property consultants and allied services in Port Harcourt.</p>
        </div>
        <div>
          <h2 className="footer-h">Office</h2>
          <address>{fullAddress}</address>
        </div>
        <div>
          <h2 className="footer-h">Phone</h2>
          <ul className="plain">
            {firm.phones.map((p) => (
              <li key={p.tel}><a href={`tel:${p.tel}`}>{p.display}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Pages</h2>
          <ul className="plain">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {firm.name}</span>
        <a href={`mailto:${firm.email}`}>{firm.email}</a>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
