import React from 'react';
import { Container, Box, Typography, Grid, Paper, Stack } from '@mui/material';

const About = ({ content }) => {
    return (
        <Box component="section" id="about" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3, md: 6 },
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 4,
                        bgcolor: 'rgba(30, 41, 59, 0.4)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    {/* Decorative element */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: (theme) => `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        }}
                    />

                    <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
                        Professional{' '}
                        <Box
                            component="span"
                            sx={{
                                background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Profile
                        </Box>
                    </Typography>

                    <Grid container spacing={6}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                                {content.summary}
                            </Typography>

                            <Stack direction="row" spacing={6} mt={4}>
                                <Box>
                                    <Typography variant="h2" sx={{ color: 'secondary.main', fontWeight: 800 }}>
                                        4+
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Years Experience
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 800 }}>
                                        10+
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Projects Completed
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    bgcolor: 'rgba(0,0,0,0.2)',
                                    p: 4,
                                    borderRadius: 3,
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                    Focus Areas
                                </Typography>
                                <Stack spacing={2}>
                                    {['Scalable Web APIs', 'Responsive UI Design', 'Performance Optimization', 'Clean Architecture'].map((item) => (
                                        <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    height: 8,
                                                    width: 8,
                                                    borderRadius: '50%',
                                                    bgcolor: 'secondary.main',
                                                }}
                                            />
                                            <Typography variant="body1">{item}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default About;
