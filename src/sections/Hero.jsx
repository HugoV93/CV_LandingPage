import { ArrowRight, Download } from 'lucide-react';

const Hero = ({ content }) => {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px', /* Navbar offset */
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'var(--primary-glow)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: -1,
                opacity: 0.5
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                <div style={{ maxWidth: '800px' }}>
                    <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '2px' }}>
                        HI THERE, I'M
                    </p>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1rem' }}>
                        <span className="gradient-text">{content.name}</span>
                    </h1>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        {content.subtitle}
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.8' }}>
                        Transforming complex problems into elegant, scalable web solutions.
                        Specializing in modern .NET backends and dynamic React frontends.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#" className="btn glass-card" style={{ padding: '0.75rem 1.5rem' }}>
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
