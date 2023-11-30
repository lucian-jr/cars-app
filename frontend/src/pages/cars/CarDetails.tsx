import React from 'react';
import Box from '@mui/material/Box';
import { Paper, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';
import { DetailsToolBar } from '../../shared/components';
import { CarForm } from '../../shared/components/car-form/CarForm';

export const CarsDetails: React.FC = () => {

	const { id = 'new' } = useParams<'id'>();
	
	const theme = useTheme();
	const navigate = useNavigate();
	
	const sendFormData = (formData: any) => {
		console.log('Dados do formulário:', formData);
	};

	return (
		<Box height='100%' padding='0px 20px' component={Paper}>
			<Box height={theme.spacing(10)} display='flex' alignItems='center'>
				<Typography variant='h5'>
					{id !== 'new' ? 'Edit' : 'Add'} car
				</Typography>
			</Box>

			<DetailsToolBar onClickBackButton={() => navigate('/cars')} />

			<CarForm onSubmit={sendFormData} />
		</Box>
	);
};