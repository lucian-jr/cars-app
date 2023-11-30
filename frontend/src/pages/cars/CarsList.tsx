import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { DefaultToolBar } from "../../shared/components";
import { useNavigate } from "react-router-dom";

export const CarsList: React.FC = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box height='100%' paddingX={2}>
            <Box height={theme.spacing(10)} display='flex' alignItems='center'>
                <Typography variant='h5'>
                    Cars
                </Typography>
            </Box>

            <DefaultToolBar onClickNewButton={() => navigate('/cars/car/new')} />

            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>Model</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Year of Fabrication</TableCell>
                                <TableCell>Price ($)</TableCell>
                                <TableCell>Chassis</TableCell>
                                <TableCell>Color</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}