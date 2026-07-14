import { FiTarget, FiHeart, FiShield, FiTrendingUp } from 'react-icons/fi'
import { LuBird } from 'react-icons/lu'

const COMMAND_URL = 'https://agroking-app.vercel.app';

export const metadata = { title: 'À propos - Agro-King' }

export default function APropos() {
  return (
    <div className="animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">À propos de nous</h1>
          <p className="page-subtitle">Built on a reliable supply network.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="mb-4 text-center">Trust and Infrastructure</h2>
            <p className="text-light mb-8 text-center" style={{ fontSize: '1.25rem' }}>
              AGRO KING is a premium poultry marketplace and intelligent farming infrastructure — structured supply, smart production, and scalable agriculture across Africa.
              Organized distribution, vetted partnerships, and a farmer support network designed to scale.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              <div style={{ padding: '2rem', background: 'var(--bg-light)', borderRadius: '12px', textAlign: 'center' }}>
                <FiTarget style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)' }}>2,400+</h3>
                <p className="text-light mt-2">Farmers onboarded</p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-light)', borderRadius: '12px', textAlign: 'center' }}>
                <LuBird style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)' }}>9,800</h3>
                <p className="text-light mt-2">Production cycles run</p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-light)', borderRadius: '12px', textAlign: 'center' }}>
                <FiTrendingUp style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)' }}>-38%</h3>
                <p className="text-light mt-2">Average mortality</p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-light)', borderRadius: '12px', textAlign: 'center' }}>
                <FiShield style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)' }}>98.6%</h3>
                <p className="text-light mt-2">On-time delivery</p>
              </div>
            </div>

            <div className="text-center" style={{ padding: '3rem', background: 'var(--bg-light)', borderRadius: '16px' }}>
              <h3 className="mb-4">Commencez l'aventure avec nous</h3>
              <p className="text-light mb-6">Rejoignez un réseau fiable et optimisez votre rendement avicole dès aujourd'hui.</p>
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
