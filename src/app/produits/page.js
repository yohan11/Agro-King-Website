import { FiBox, FiArrowRight } from 'react-icons/fi'

const COMMAND_URL = 'https://agroking-app.vercel.app';

export const metadata = { title: 'Nos Produits - Agro-King' }

export default function Produits() {
  const products = [
    { title: 'Packs Poussins (100, 200...)', desc: 'Poussins d\'un jour en parfaite santé, vaccinés et prêts pour le démarrage.' },
    { title: 'Aliment Démarrage', desc: 'Formule riche en protéines pour les premières semaines.' },
    { title: 'Aliment Croissance', desc: 'Équilibré pour développer la structure osseuse et musculaire.' },
    { title: 'Aliment Finition', desc: 'Haute énergie pour atteindre le poids idéal avant la vente.' }
  ]

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {products.map((p, i) => (
              <div key={i} style={{ padding: '2.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <FiBox style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }} />
                <h3 className="mb-1">{p.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>{p.desc}</p>
                <a href={COMMAND_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                  Commander <FiArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
