import { Box, Button, TextField, useTheme, Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'

interface IDefaultToolBarProps {
    searchText?: string;
    showSearchInput?: boolean;
    onAlterSearchText?: (newText: string) => void;

    showNewButton?: boolean;
    onClickNewButton: () => void;
}

export const DefaultToolBar: React.FC<IDefaultToolBarProps> = ({
    searchText = '',
    showSearchInput = false,
    onAlterSearchText,

    showNewButton = true,
    onClickNewButton,
}) => {

    const theme = useTheme();

    return (
        <Box
            component={Paper}
            display='flex'
            alignItems='center'
            gap={1}
            paddingX={2}
            height={theme.spacing(8)}
            marginBottom={theme.spacing(4)}
        >
            { showSearchInput &&
                <TextField
                    size="small"
                    placeholder="Search..."
                    variant='outlined'
                    value={searchText}
                    onChange={(e) => onAlterSearchText?.(e.target.value)}
                />
            }

            { showNewButton &&
                <Box width='100%' display='flex' flex={1} justifyContent='end'>
                    <Button variant="contained" endIcon={<AddIcon />} onClick={onClickNewButton}>
                        NEW
                    </Button>
                </Box>
            }
        </Box>
    );
}