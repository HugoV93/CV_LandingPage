import React from 'react';
import { useScrollTrigger, Zoom, Fab, Box } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={trigger}>
            <Box
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 999, // Ensure it's above other elements
                }}
            >
                <Fab
                    onClick={handleClick}
                    color="primary"
                    size="medium"
                    aria-label="scroll back to top"
                    sx={{
                        background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
                        },
                        transition: 'all 0.3s'
                    }}
                >
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </Zoom>
    );
};

export default ScrollToTop;
