const About = ({ content }) => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                    {/* Decorative element */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        background: 'var(--gradient-main)'
                    }} />

                    <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Professional <span className="gradient-text">Profile</span></h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                {content.summary}
                            </p>
                            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '3rem', color: 'var(--accent)', fontWeight: '800' }}>4+</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>Years Experience</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: '800' }}>10+</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>Projects Completed</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Focus Areas</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {['Scalable Web APIs', 'Responsive UI Design', 'Performance Optimization', 'Clean Architecture'].map((item) => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
