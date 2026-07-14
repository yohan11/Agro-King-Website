import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata = {
  title: 'Agro-King - Leader de l\'élevage avicole',
  description: 'Votre partenaire de confiance pour les poussins et l\'alimentation de volailles.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />

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
                  <Image src="/logo.jpeg" alt="Agro-King Logo" width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
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
