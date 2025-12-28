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

                    <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                        {/* Social Links from Props */}
                        {content?.social?.map((item) => {
                            // Check if we have a mapping, otherwise fallback (or handle appropriately)
                            // Note: Lucide icons were used before. We need to map them or import them.
                            // For now, assuming standard naming or using what's available.
                            // If content.js imports Lucide icons directly, we can't use them easily in MUI unless we wrap them.
                            // Let's rely on the fact we installed @mui/icons-material and map likely names.
                            // Actually, the previous file used `item.icon`. If `item.icon` is a component, we can render it? 
                            // Yes, but it's a Lucide component. We should probably use MUI icons for consistency.
                            // Let's see if we can just render `item.icon` as a component if it's passed.
                            // But we want to remove Lucide dependency eventually. 
                            // Let's Assume for now we will fix data/content.js later or accept Lucide icons inside MUI buttons.

                            const IconComponent = item.icon;
                            // If item.icon is a React component (Lucide), we can use it.
                            // But we want to use MUI IconButton.

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
                                        gap: 1,
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none',
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
