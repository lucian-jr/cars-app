import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        mode: 'light',
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
            default: '#F7F7F7',
            paper: '#FFFFFF',
        }
    }
});