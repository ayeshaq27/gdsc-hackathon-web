import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWK7_NcV8ZFJDvXTuhT23WhJI6wcR-SGQ",
  authDomain: "solutionhacksinterestform.firebaseapp.com",
  databaseURL: "https://solutionhacksinterestform-default-rtdb.firebaseio.com",
  projectId: "solutionhacksinterestform",
  storageBucket: "solutionhacksinterestform.firebasestorage.app",
  messagingSenderId: "295145890252",
  appId: "1:295145890252:web:17bd9e4c9fd75738073d69",
  measurementId: "G-0J8WJHQVF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('yes');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = { name, email, contact };

    try {
      await set(ref(database, 'contacts/' + Date.now()), formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <Container sx={{ marginTop: '5vh', padding: '5vw', borderRadius: '30px', backgroundColor: '#f5f5dc' }}>
      <Typography variant="h2" color="secondary.contrastText" sx={{ marginBottom: '2vh' }}>
        Interest Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ 
            backgroundColor: '#fff', 
            borderRadius: '30px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
            }
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ 
            backgroundColor: '#fff', 
            borderRadius: '30px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
            }
          }}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ color: '#333' }}>Would you like to be contacted when hackathon applications open up?</FormLabel>
          <RadioGroup row aria-label="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: '40px' }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
