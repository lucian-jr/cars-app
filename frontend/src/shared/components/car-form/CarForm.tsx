import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import axios from "axios";

interface ICarFormProps {
    handleSubmit?: () => void;
}

export interface CarFormData {
    brand: string;
    model: string;
    name: string;
    year: number;
    price: number;
    chassis: string;
    color: string;
}

interface ICarFormProps {
    onSubmit: (formData: CarFormData) => void;
}

export const CarForm: React.FC<ICarFormProps> = ({ onSubmit }) => {

    const [formData, setFormData] = useState<CarFormData>({
        brand: '',
        model: '',
        name: '',
        year: 0,
        price: 0,
        chassis: '',
        color: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3030/car', formData);
            onSubmit(formData);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <Box component={Paper} flex={1} overflow='auto'>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Chassis"
                    name="chassis"
                    value={formData.chassis}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Box>
    );
}
