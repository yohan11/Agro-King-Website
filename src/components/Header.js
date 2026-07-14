'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const COMMAND_URL = 'https://agroking-app.vercel.app';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          <Image src="/logo.jpeg" alt="Agro-King Logo" width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
          AGRO-KING
        </Link>
        
        <nav className="nav-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Accueil</Link>
          <Link href="/produits" className={`nav-link ${pathname === '/produits' ? 'active' : ''}`}>Produits</Link>
          <Link href="/partenaires" className={`nav-link ${pathname === '/partenaires' ? 'active' : ''}`}>Partenaires</Link>
          <Link href="/a-propos" className={`nav-link ${pathname === '/a-propos' ? 'active' : ''}`}>À propos</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Nous contacter</Link>
        </nav>

        <a href={COMMAND_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Commander
        </a>
      </div>
    </header>
  );
}
