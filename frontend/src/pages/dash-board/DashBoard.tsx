import { Box, useTheme } from "@mui/material";

export const DashBoard: React.FC = () => {

    const theme = useTheme();
    
    return(
        <Box height='100%' padding='orizontal' flex={1} overflow='auto'>
            <Box height={theme.spacing(10)}>
                <h3>HOME</h3>
            </Box>
        </Box>
    );
}