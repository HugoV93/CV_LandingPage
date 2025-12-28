import React from 'react';
import { Container, Box, Typography, Card, Stack } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

const Experience = ({ content }) => {
    return (
        <Box component="section" id="experience" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" sx={{ mb: 8, fontWeight: 700 }}>
                    Work{' '}
                    <Box
                        component="span"
                        sx={{
                            background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Experience
                    </Box>
                </Typography>

                <Stack spacing={4} maxWidth="800px" mx="auto">
                    {content.map((job, index) => (
                        <Card
                            key={index}
                            sx={{
                                p: 4,
                                borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
                                // Theme defaults handle background, blur, and hover interaction
                            }}
                        >
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                justifyContent="space-between"
                                alignItems={{ xs: 'flex-start', sm: 'center' }}
                                spacing={1}
                                mb={2}
                            >
                                <Box>
                                    <Typography variant="h5" fontWeight={600}>
                                        {job.role}
                                    </Typography>
                                    <Typography variant="h6" color="primary.main" fontWeight={500}>
                                        {job.company}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                                    <CalendarToday sx={{ fontSize: 18 }} />
                                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                        {job.period}
                                    </Typography>
                                </Box>
                            </Stack>

                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                {job.description}
                            </Typography>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Experience;
