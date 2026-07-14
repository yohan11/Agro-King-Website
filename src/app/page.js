import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
const COMMAND_URL = 'https://agroking-app.vercel.app';

export default function Home() {
  return (
    <div className="animate-slide-up">
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--bg-light) 0%, #e0f2fe 100%)',
        padding: '8rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <Image src="/logo.jpeg" alt="Agro-King Logo" width={120} height={120} style={{ borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--white)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          </div>
          <h1 style={{ fontSize: '4rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            L'Élevage de Volailles, <br/>
            <span style={{ color: 'var(--primary)' }}>Simplifié et Rentable.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Agro-King vous fournit des poussins de première qualité et des aliments complets (démarrage, croissance, finition) pour garantir le succès de votre ferme.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href={COMMAND_URL} className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
              Commander maintenant <FiArrowRight />
            </a>
            <Link href="/produits" className="btn btn-outline btn-large">
              Découvrir nos offres
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ fontSize: '2.5rem' }}>Pourquoi choisir Agro-King ?</h2>
            <p className="text-light">Une approche moderne pour maximiser vos rendements.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Qualité Supérieure', desc: 'Des poussins rigoureusement sélectionnés pour une croissance optimale.' },
              { title: 'Alimentation Équilibrée', desc: 'Des formulations adaptées à chaque étape de la vie de vos volailles.' },
              { title: 'Suivi Virtuel', desc: 'Une application pour suivre vos cycles et planifier vos réapprovisionnements.' }
            ].map((f, i) => (
              <div key={i} style={{ padding: '2rem', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <FiCheckCircle style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3>{f.title}</h3>
                <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
