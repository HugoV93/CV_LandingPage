import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3b82f6', // Blue 500
            light: '#60a5fa',
            dark: '#2563eb',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#61dafb', // React Cyan
        },
        background: {
            default: '#020617', // Slate 950
            paper: 'rgba(30, 41, 59, 0.7)', // Slate 800 with opacity for cards
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
            fontSize: '1rem',
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    '@media (min-width: 600px)': {
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '0.75rem 1.5rem',
                    transition: 'all 0.3s ease',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #3b82f6 0%, #61dafb 100%)',
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #3b82f6 0%, #61dafb 100%)', // Maintain gradient
                        boxShadow: '0 0 25px rgba(59, 130, 246, 0.6)',
                        transform: 'scale(1.05)',
                    },
                },
                outlined: {
                    borderColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        transform: 'scale(1.05)',
                    }
                }
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: 'transparent', // Let Card handle bg
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
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)', // shadow-glow
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                    }
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    transition: 'all 0.3s ease',
                }
            }
        }
    },
});

export default theme;
