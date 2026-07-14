import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

const COMMAND_URL = 'https://agroking-app.vercel.app';

export const metadata = { title: 'Nos Produits - Agro-King' }

export default function Produits() {
  const feeds = [
    { title: 'Aliment Démarrage', desc: 'Formule riche en protéines pour les premières semaines. Favorise une croissance osseuse rapide.', img: '/product.jpg' },
    { title: 'Aliment Croissance', desc: 'Équilibré pour développer la structure musculaire après le 14ème jour.', img: '/product.jpg' },
    { title: 'Aliment Finition', desc: 'Haute énergie pour atteindre le poids idéal avant la vente et maximiser la rentabilité.', img: '/product.jpg' }
  ];

  const vaccines = [
    { title: 'Vaccin Newcastle', desc: 'Prévention vitale contre la maladie de Newcastle pour vos poussins.', img: '/placeholder.jpg' },
    { title: 'Vaccin Gumboro', desc: 'Protection renforcée contre la maladie de Gumboro (Bursite infectieuse).', img: '/placeholder.jpg' },
    { title: 'Vitamines & Électrolytes', desc: 'Compléments essentiels pour réduire le stress après le transport.', img: '/placeholder.jpg' }
  ];

  const equipments = [
    { title: 'Mangeoires Automatiques', desc: 'Réduisez le gaspillage d\'aliment avec nos mangeoires optimisées.', img: '/placeholder.jpg' },
    { title: 'Abreuvoirs Siphoïdes', desc: 'Garantissez une eau propre et fraîche en continu à vos volailles.', img: '/placeholder.jpg' },
    { title: 'Chauffage (Éleveuses)', desc: 'Maintenez la température idéale pour vos poussins d\'un jour.', img: '/placeholder.jpg' }
  ];

  const renderSection = (title, subtitle, items) => (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--primary-dark)' }}>{title}</h2>
        <p className="text-light">{subtitle}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {items.map((p, i) => (
          <div key={i} style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden', background: '#f1f5f9' }}>
              {p.img === '/placeholder.jpg' ? (
                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
                    Bientôt disponible
                 </div>
              ) : (
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
              )}
            </div>
            <h3 className="mb-1">{p.title}</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', flex: 1 }}>{p.desc}</p>
            <a href={COMMAND_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              Commander <FiArrowRight style={{ display: 'inline' }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Nos Produits</h1>
          <p className="page-subtitle">Tout ce dont vous avez besoin pour un cycle d'élevage réussi, livré à votre ferme.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {renderSection('Aliments pour Volailles', 'Des formules nutritionnelles complètes adaptées à chaque phase de croissance.', feeds)}
          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '4rem' }} />
          {renderSection('Vaccins et Santé', 'Une gamme médicale pour garantir la biosécurité de votre cheptel.', vaccines)}
          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '4rem' }} />
          {renderSection('Équipements d\'Élevage', 'Outils modernes et robustes pour équiper votre bâtiment avicole.', equipments)}
        </div>
      </section>
    </div>
  )
}
