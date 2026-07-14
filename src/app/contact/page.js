import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const COMMAND_URL = 'https://agroking-app.vercel.app';

export const metadata = { title: 'Contact - Agro-King' }

export default function Contact() {
  return (
    <div className="animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Nous Contacter</h1>
          <p className="page-subtitle">Notre équipe est là pour répondre à toutes vos questions.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Contact Info */}
            <div>
              <h2 className="mb-4">Entrons en contact</h2>
              <p className="text-light mb-8">N'hésitez pas à nous appeler ou à nous envoyer un message. Nous vous répondrons dans les plus brefs délais.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '1rem', background: 'var(--bg-light)', borderRadius: '50%', color: 'var(--primary)' }}>
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Adresse</h4>
                    <p className="text-light" style={{ margin: 0 }}>Yaoundé, Cameroun</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '1rem', background: 'var(--bg-light)', borderRadius: '50%', color: 'var(--primary)' }}>
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Téléphone</h4>
                    <p className="text-light" style={{ margin: 0 }}>+237 600 00 00 00</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '1rem', background: 'var(--bg-light)', borderRadius: '50%', color: 'var(--primary)' }}>
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Email</h4>
                    <p className="text-light" style={{ margin: 0 }}>contact@agro-king.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action */}
            <div style={{ padding: '3rem', background: 'var(--bg-light)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <h3 className="mb-4">Prêt à passer à l'action ?</h3>
              <p className="text-light mb-8">Ne perdez plus de temps, commencez à gérer vos commandes de poussins et d'aliments dès aujourd'hui.</p>
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
