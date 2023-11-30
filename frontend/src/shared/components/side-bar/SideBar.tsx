import { useAppThemeContext } from "../../contexts";
import { Box, List, Drawer, useTheme, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ThemeIcon from '@mui/icons-material/Brightness4'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';


interface ISideBarProps {
    children: React.ReactNode
}

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {

    const theme = useTheme();
    const navigate = useNavigate();

    const { toggleTheme } = useAppThemeContext();

    return (
        <>
            <Box display="flex">
                <Drawer open variant="permanent">
                    <Box width={theme.spacing(28)} height={theme.spacing(12)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar sx={{ width: theme.spacing(8), height: theme.spacing(8) }} src="https://avatars.githubusercontent.com/u/67123695?v=4" />
                    </Box>

                    <Divider />

                    <Box flex={1} width={theme.spacing(28)}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/cars')}>
                                <ListItemIcon>
                                    <DirectionsCarIcon />
                                </ListItemIcon>
                                <ListItemText primary='Cars list' />
                            </ListItemButton>
                        </ListItem>
                    </Box>

                    
                    <Box width={theme.spacing(28)}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <ThemeIcon />
                                </ListItemIcon>
                                <ListItemText primary='Change theme' />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Drawer>

                <Box width="100vw" height="100vh" marginLeft={theme.spacing(28)}>
                    {children}
                </Box>
            </Box>
        </>
    );
}