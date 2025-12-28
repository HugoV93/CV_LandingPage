import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email, Phone, Map } from '@mui/icons-material';

// Helper to map icon names to MUI components
const IconMap = {
    Github: GitHub,
    Linkedin: LinkedIn,
    Twitter: Twitter,
    Email: Email,
    Phone: Phone,
    // Add others if needed
};

const Footer = ({ content }) => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            id="contact"
            sx={{
                py: 8,
                background: 'linear-gradient(to top, rgba(30, 41, 59, 0.7) 0%, transparent 100%)',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={4} alignItems="center" textAlign="center">
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Let's Connect
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
                        Feel free to reach out for collaborations or just a friendly hello.
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        flexWrap="wrap"
                        justifyContent="center"
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                        {/* Social Links from Props */}
                        {content?.social?.map((item) => {
                            const IconComponent = item.icon;

                            return (
                                <Box
                                    key={item.name}
                                    component="a"
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        bgcolor: 'rgba(30, 41, 59, 0.7)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'text.primary',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 1,
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none',
                                        width: { xs: '100%', sm: 'auto' }, // Full width on mobile
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: 'primary.main',
                                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                                        }
                                    }}
                                >
                                    {/* Render the icon safely */}
                                    {IconComponent && <IconComponent size={20} />}
                                    <Typography variant="button">{item.name === 'Email' ? content.email : item.name}</Typography>
                                </Box>
                            )
                        })}
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
                        © {currentYear} {content?.name || 'Hugo Matos Viana'}. Built with React & MUI v6.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
