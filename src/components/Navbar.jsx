import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                padding: '1.5rem 0',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Space Grotesk, sans-serif' }}>
                    <Code2 size={32} color="var(--accent)" />
                    <span>HV<span style={{ color: 'var(--accent)' }}>.</span></span>
                </a>

                {/* Desktop Menu */}
                <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} style={{ fontWeight: '500', color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                            Hire Me
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', display: 'none' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu (Simple implementation for now) */}
            {isOpen && (
                <div
                    className="mobile-menu glass-card"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        width: '100%',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{ fontSize: '1.2rem' }}>
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
