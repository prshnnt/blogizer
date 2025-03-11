import { createTheme } from '@mui/material/styles';

// const theme = createTheme();
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#7289da', // Discord's blurple color
//     },
//     background: {
//       default: '#36393f', // Discord's main background
//       paper: '#2f3136', // Discord's secondary background
//     },
//     text: {
//       primary: '#dcddde',
//       secondary: '#8e9297',
//     },
//   },
//   typography: {
//     fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: '3px',
//           textTransform: 'none',
//         },
//       },
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#202225', // Discord's top bar color
//         },
//       },
//     },
//     MuiDrawer: {
//       styleOverrides: {
//         paper: {
//           backgroundColor: '#2f3136', // Discord's sidebar color
//         },
//       },
//     },
//   },
// });

const theme = createTheme({
    palette: {
        primary: {
            main: '#007AFF', // iOS blue
        },
        secondary: {
            main: '#FF3B30', // iOS red
        },
        background: {
            default: '#F2F2F7', // iOS light gray background
            paper: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        h1: {
            fontSize: '34px',
            fontWeight: '700',
        },
        h2: {
            fontSize: '28px',
            fontWeight: '700',
        },
        body1: {
            fontSize: '17px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: '600',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                    },
                },
            },
        },
    },
});



export default theme;