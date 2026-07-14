import { FiInfo, FiTarget, FiHeart } from 'react-icons/fi'

const COMMAND_URL = 'https://agroking-app.vercel.app';

export const metadata = { title: 'À propos - Agro-King' }

export default function APropos() {
  return (
    <div className="animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">À propos de nous</h1>
          <p className="page-subtitle">Notre mission : révolutionner l'élevage avicole en Afrique Centrale.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="mb-4">Notre Histoire</h2>
            <p className="text-light mb-8" style={{ fontSize: '1.125rem' }}>
              Agro-King est née d'un constat simple : les éleveurs de volailles font face à de nombreux défis logistiques et techniques pour se procurer des poussins de qualité et suivre les bonnes formules alimentaires. 
              Nous avons donc créé une plateforme tout-en-un pour simplifier ce processus.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
              <div style={{ padding: '2rem', background: 'var(--bg-light)', borderRadius: '12px' }}>
                <FiTarget style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3>Notre Vision</h3>
                <p className="text-light mt-4">Devenir le partenaire numéro 1 de tout éleveur cherchant rentabilité et fiabilité.</p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-light)', borderRadius: '12px' }}>
                <FiHeart style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3>Nos Valeurs</h3>
                <p className="text-light mt-4">Transparence, Qualité sans compromis, et Soutien constant à nos clients.</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="mb-4">Commencez l'aventure avec nous</h3>
              <a href={COMMAND_URL} className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                Commander maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
