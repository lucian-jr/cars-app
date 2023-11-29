import React from 'react';
import { CarForm } from '../../shared/components/car-form/CarForm';

export const CarRegistration: React.FC = () => {
    const sendFormData = (formData: any) => {
        // Lógica para lidar com os dados do formulário
        console.log('Dados do formulário:', formData);
    };

  return (
    <div>
      <h1>Car Registration</h1>
      <CarForm onSubmit={sendFormData} />
    </div>
  );
};