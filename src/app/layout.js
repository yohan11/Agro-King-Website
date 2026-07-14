import './globals.css'
import Link from 'next/link'
import { FiCommand, FiHome, FiBox, FiUsers, FiInfo, FiMail } from 'react-icons/fi'
import { LuBird } from 'react-icons/lu'

export const metadata = {
  title: 'Agro-King - Leader de l\'élevage avicole',
  description: 'Votre partenaire de confiance pour les poussins et l\'alimentation de volailles.',
}

const COMMAND_URL = 'https://agroking-app.vercel.app';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* Header / Navigation */}
        <header className="header">
          <div className="container header-container">
            <Link href="/" className="logo">
              <LuBird className="logo-icon" />
              AGRO-KING
            </Link>
            
            <nav className="nav-links">
              <Link href="/" className="nav-link">Accueil</Link>
              <Link href="/produits" className="nav-link">Produits</Link>
              <Link href="/partenaires" className="nav-link">Partenaires</Link>
              <Link href="/a-propos" className="nav-link">À propos</Link>
              <Link href="/contact" className="nav-link">Nous contacter</Link>
            </nav>

            <a href={COMMAND_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Commander
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ minHeight: '60vh' }}>
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="logo mb-2" style={{ color: 'white' }}>
                  <LuBird className="logo-icon" style={{ color: 'var(--primary)' }} />
                  AGRO-KING
                </div>
                <p>L'excellence dans l'élevage avicole et la nutrition animale au Cameroun.</p>
              </div>
              <div className="footer-col">
                <h3>Liens Rapides</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><Link href="/">Accueil</Link></li>
                  <li><Link href="/produits">Nos Produits</Link></li>
                  <li><Link href="/partenaires">Partenaires</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Contact</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>📍 Yaoundé, Cameroun</li>
                  <li>📞 +237 600 00 00 00</li>
                  <li>✉️ contact@agro-king.com</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} Agro-King. Tous droits réservés.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
