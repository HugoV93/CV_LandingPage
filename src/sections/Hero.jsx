import React from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import { ArrowForward, Download } from '@mui/icons-material';

const Hero = ({ content }) => {
    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                pt: 8,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Glow */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '500px',
                    height: '500px',
                    background: 'rgba(59, 130, 246, 0.5)', // primary glow
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    zIndex: -1,
                    opacity: 0.5,
                }}
            />

            <Container maxWidth="lg">
                <Box maxWidth="800px">
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'secondary.main',
                            fontWeight: 600,
                            mb: 2,
                            letterSpacing: 2,
                            textTransform: 'uppercase',
                        }}
                    >
                        Hi There, I'm
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            lineHeight: 1.1,
                            mb: 2,
                            fontSize: { xs: '3rem', md: '5rem' },
                            background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {content.name}
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2.5rem' },
                            color: 'text.secondary',
                            mb: 3,
                        }}
                    >
                        {content.subtitle}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            color: 'text.secondary',
                            mb: 5,
                            maxWidth: '600px',
                            lineHeight: 1.8,
                        }}
                    >
                        Transforming complex problems into elegant, scalable web solutions.
                        Specializing in modern .NET backends and dynamic React frontends.
                    </Typography>

                    <Stack direction="row" spacing={2} flexWrap="wrap">
                        <Button
                            variant="contained"
                            size="large"
                            href="#experience"
                            endIcon={<ArrowForward />}
                            sx={{ px: 4, py: 1.5, fontSize: '1rem', borderRadius: 2 }}
                        >
                            View My Work
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            href="#"
                            endIcon={<Download />}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                borderRadius: 2,
                                color: 'text.primary',
                                borderColor: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                                bgcolor: 'rgba(255,255,255,0.05)',
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    borderColor: 'white'
                                }
                            }}
                        >
                            Download CV
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
