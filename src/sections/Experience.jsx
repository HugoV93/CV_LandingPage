import { Briefcase, Calendar } from 'lucide-react';

const Experience = ({ content }) => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Work <span className="gradient-text">Experience</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {content.map((job, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                borderLeft: '4px solid var(--primary)',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{job.role}</h3>
                                    <h4 style={{ color: 'var(--primary)', fontWeight: '600' }}>{job.company}</h4>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <Calendar size={16} />
                                    <span>{job.period}</span>
                                </div>
                            </div>

                            <div style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                {/* Check if description contains bullets or is a paragraph */}
                                <p>{job.description}</p>
                            </div>

                            {/* Optional: Add decorative circle on timeline if we added a vertical line */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
