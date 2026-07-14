import { FiUsers, FiAward } from 'react-icons/fi'

const COMMAND_URL = 'https://agroking-app.vercel.app';

export const metadata = { title: 'Partenaires - Agro-King' }

export default function Partenaires() {
  return (
    <div className="animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Nos Partenaires</h1>
          <p className="page-subtitle">Ils nous font confiance pour accompagner les éleveurs au quotidien.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container text-center">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FiUsers style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '2rem' }} />
            <h2 className="mb-4">Un réseau d'experts à votre service</h2>
            <p className="text-light mb-8" style={{ fontSize: '1.125rem' }}>
              Chez Agro-King, nous collaborons avec les meilleurs couvoirs, les fournisseurs d'aliments certifiés et les vétérinaires qualifiés pour vous garantir des produits de la plus haute qualité. 
            </p>
            
            <div style={{ padding: '3rem', background: 'var(--bg-light)', borderRadius: '16px' }}>
              <h3 className="mb-2">Vous êtes un fournisseur ou un expert avicole ?</h3>
              <p className="text-light mb-4">Rejoignez notre réseau et aidez-nous à transformer l'élevage au Cameroun.</p>
              <a href="mailto:contact@agro-king.com" className="btn btn-outline">
                Devenir Partenaire
              </a>
            </div>
            
            <div className="mt-4" style={{ marginTop: '4rem' }}>
              <h3 className="mb-4">Prêt à démarrer votre élevage ?</h3>
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
