import { Box, Button, Divider, Paper, useTheme } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface IDetailsToolBarProps {
    showSaveButton?: boolean;
    showDeleteButton?: boolean;
    showAddButton?: boolean;
    showBackButton?: boolean;

    onClickBackButton: () => void;
}

export const DetailsToolBar: React.FC<IDetailsToolBarProps> = ({
    showSaveButton = true,
    showDeleteButton = true,
    showAddButton = true,
    showBackButton = true,

    onClickBackButton
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
            {showSaveButton &&
                <Button variant="contained" color='success' startIcon={<SaveIcon />}>
                    SAVE
                </Button>
            }

            {showAddButton &&
                <Button variant="contained" startIcon={<AddIcon />}>
                    NEW
                </Button>
            }

            {showDeleteButton &&
                <Button variant="contained" color='error' startIcon={<DeleteIcon />}>
                    REMOVE
                </Button>
            }

            {showBackButton &&
                <Box width='100%' display='flex' flex={1} justifyContent='end'>
                    <Button variant="outlined" color="secondary" onClick={onClickBackButton} startIcon={<ArrowBackIcon />}>
                        BACK
                    </Button>
                </Box>
            }
        </Box>
    );
}