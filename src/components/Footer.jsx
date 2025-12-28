import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = ({ content }) => {
    return (
        <footer
            id="contact"
            style={{
                padding: '4rem 0 2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 100%)'
            }}
        >
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Connect</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Feel free to reach out for collaborations or just a friendly hello.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    {content.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            className="glass-card"
                            style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}
                        >
                            <item.icon size={20} color="var(--accent)" />
                            <span>{item.name === 'Email' ? content.email : item.name}</span>
                        </a>
                    ))}
                    <div className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone size={20} color="var(--accent)" />
                        <span>{content.phone}</span>
                    </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '3rem' }}>
                    © {new Date().getFullYear()} {content.name}. Built with React & Vanilla CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
