import React from 'react';
import { Container, Box, Typography, Card, Chip, Stack } from '@mui/material';
import { Code, Storage } from '@mui/icons-material';

const Skills = ({ content }) => {
    return (
        <Box component="section" id="skills" sx={{ py: 12, bgcolor: 'rgba(2, 6, 23, 0.5)' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" sx={{ mb: 8, fontWeight: 700 }}>
                    Technical{' '}
                    <Box
                        component="span"
                        sx={{
                            background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Stack
                    </Box>
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 4
                    }}
                >
                    {/* Backend */}
                    <Card sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="row" spacing={2} alignItems="center" mb={4}>
                            <Box
                                sx={{
                                    p: 1.5,
                                    bgcolor: 'rgba(59, 130, 246, 0.1)',
                                    borderRadius: 2,
                                    color: 'primary.main',
                                    display: 'flex',
                                }}
                            >
                                <Storage />
                            </Box>
                            <Typography variant="h5" fontWeight={600}>
                                Backend Engineering
                            </Typography>
                        </Stack>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {content.backend.map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        fontSize: '0.9rem',
                                        height: 'auto',
                                        py: 1,
                                        '&:hover': {
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                            borderColor: 'primary.main',
                                        },
                                        transition: 'all 0.3s',
                                    }}
                                />
                            ))}
                        </Box>
                    </Card>

                    {/* Frontend */}
                    <Card sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="row" spacing={2} alignItems="center" mb={4}>
                            <Box
                                sx={{
                                    p: 1.5,
                                    bgcolor: 'rgba(97, 218, 251, 0.1)',
                                    borderRadius: 2,
                                    color: 'secondary.main',
                                    display: 'flex',
                                }}
                            >
                                <Code />
                            </Box>
                            <Typography variant="h5" fontWeight={600}>
                                Frontend Development
                            </Typography>
                        </Stack>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {content.frontend.map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        fontSize: '0.9rem',
                                        height: 'auto',
                                        py: 1,
                                        '&:hover': {
                                            bgcolor: 'secondary.main',
                                            color: 'background.default',
                                            borderColor: 'secondary.main',
                                        },
                                        transition: 'all 0.3s',
                                    }}
                                />
                            ))}
                        </Box>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};

export default Skills;
