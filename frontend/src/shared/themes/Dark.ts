import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#ffffff'
        },
        background: {
            default: '#303134',
            paper: '#202124',
        }
    },
    typography: {
        allVariants : {
            color: 'white',
        }
    }
});