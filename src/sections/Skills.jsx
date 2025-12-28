import { Code, Database } from 'lucide-react';

const Skills = ({ content }) => {
    return (
        <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Technical <span className="gradient-text">Stack</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {/* Backend */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '10px' }}>
                                <Database size={24} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem' }}>Backend Engineering</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {content.backend.map((skill) => (
                                <span
                                    key={skill}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = 'var(--primary)';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.color = 'var(--text-main)';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '10px', background: 'rgba(97, 218, 251, 0.2)', borderRadius: '10px' }}>
                                <Code size={24} color="var(--accent)" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem' }}>Frontend Development</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {content.frontend.map((skill) => (
                                <span
                                    key={skill}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = 'var(--accent)';
                                        e.target.style.color = 'var(--bg-main)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.color = 'var(--text-main)';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
