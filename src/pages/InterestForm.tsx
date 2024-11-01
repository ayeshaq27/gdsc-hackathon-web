import React from 'react';
import ContactForm from '../components/formikInputs/contactForm';
import { Container, Typography } from '@mui/material';
import './Home.css'

const InterestForm: React.FC = () => {
  return (
    <Container className='home-container'>
      
      <ContactForm />
    </Container>
  );
};

export default InterestForm;
