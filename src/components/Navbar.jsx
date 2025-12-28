import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useScrollTrigger,
    Slide,
    Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Code as CodeIcon } from '@mui/icons-material';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Experience', href: '#experience' },
        { title: 'Contact', href: '#contact' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', pt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                <CodeIcon sx={{ color: 'secondary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    HV<span style={{ color: '#61dafb' }}>.</span>
                </Typography>
            </Box>
            <List>
                {navLinks.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton
                            component="a"
                            href={item.href}
                            sx={{ textAlign: 'center' }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button
                variant="contained"
                color="primary"
                href="#contact"
                sx={{ mt: 2, width: '80%' }}
            >
                Hire Me
            </Button>
        </Box>
    );

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar
                    position="fixed"
                    elevation={scrolled ? 4 : 0}
                    sx={{
                        bgcolor: scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
                        backdropFilter: scrolled ? 'blur(12px)' : 'none',
                        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        transition: 'all 0.3s ease',
                        backgroundImage: 'none',
                        py: scrolled ? 1 : 2
                    }}
                >
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                            <Box
                                component="a"
                                href="#"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                            >
                                <CodeIcon sx={{ color: 'secondary.main', fontSize: 32 }} />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                        fontFamily: '"Space Grotesk", sans-serif'
                                    }}
                                >
                                    HV<span style={{ color: '#61dafb' }}>.</span>
                                </Typography>
                            </Box>

                            {/* Desktop Menu */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.title}
                                        href={link.href}
                                        color="inherit"
                                        sx={{
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            '&:hover': { color: 'primary.main' },
                                        }}
                                    >
                                        {link.title}
                                    </Button>
                                ))}
                                <Button
                                    variant="contained"
                                    href="#contact"
                                    sx={{
                                        px: 3,
                                        borderRadius: '50px',
                                    }}
                                >
                                    Hire Me
                                </Button>
                            </Box>

                            {/* Mobile Menu Icon */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' } }}
                            >
                                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>

            <Box component="nav">
                <Drawer
                    anchor="right"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 280,
                            backdropFilter: 'blur(10px)',
                            bgcolor: 'rgba(2,6,23,0.95)',
                            borderLeft: '1px solid rgba(255,255,255,0.1)'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
};

export default Navbar;
