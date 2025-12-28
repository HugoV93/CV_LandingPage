import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3b82f6', // Blue 500
            light: '#60a5fa',
            dark: '#2563eb',
        },
        secondary: {
            main: '#61dafb', // React Cyan
        },
        background: {
            default: '#020617', // Slate 950
            paper: '#1e293b', // Slate 800
        },
        text: {
            primary: '#f8fafc', // Slate 50
            secondary: '#94a3b8', // Slate 400
        },
    },
    typography: {
        fontFamily: '"Inter", "system-ui", "sans-serif"',
        h1: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
        },
        h4: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
        },
        h5: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 500,
        },
        h6: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 500,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #3b82f6 0%, #61dafb 100%)',
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
                    '&:hover': {
                        boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Remove default MUI overlay
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(30, 41, 59, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 12,
                },
            },
        },
    },
});

export default theme;
