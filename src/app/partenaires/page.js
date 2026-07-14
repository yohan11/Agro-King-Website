'use client';
import { useState } from 'react';
import { FiUsers, FiArrowRight } from 'react-icons/fi';

const COMMAND_URL = 'https://agroking-app.vercel.app';

export default function Partenaires() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('action', 'register');
    params.append('name', formData.name);
    params.append('phone', formData.phone);
    params.append('location', formData.location);
    
    // Redirect to the app with pre-filled parameters
    window.location.href = `${COMMAND_URL}/?${params.toString()}`;
  };

  return (
    <div className="animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Nos Partenaires</h1>
          <p className="page-subtitle">Rejoignez un réseau de producteurs d'excellence.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container text-center">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FiUsers style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '2rem' }} />
            <h2 className="mb-4">Développez votre activité avec AGRO KING</h2>
            <p className="text-light mb-8" style={{ fontSize: '1.25rem' }}>
              Rejoignez notre réseau de producteurs et développez votre activité. Nous vous offrons les meilleurs intrants (poussins, aliments) et un suivi continu pour garantir votre rentabilité.
            </p>
            
            <div style={{ padding: '3rem', background: 'var(--bg-light)', borderRadius: '16px', textAlign: 'left' }}>
              <h3 className="mb-2 text-center">Formulaire d'Inscription Rapide</h3>
              <p className="text-light mb-6 text-center">Remplissez vos informations pour créer votre compte partenaire.</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nom complet ou Nom de la ferme</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Numéro de téléphone</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Ville / Quartier</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.location} 
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} 
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  Rejoindre le réseau <FiArrowRight />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
