import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Step1 from './components/Personal';
import Step2 from './components/Address';
import Step3 from './components/Confirmation';
import { Container, Paper, Box } from '@mui/material';
import './App.css';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [submitted, setSubmitted] = useState(false); // State for submission confirmation

  // Load form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const stepLabels = ['Personal Information', 'Address Information', 'Confirmation'];

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const prevStep = () => setActiveStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    setSubmitted(true); // Set submission confirmation to true

    // Automatically navigate to Personal Information after 3 seconds
    setTimeout(() => {
      setActiveStep(0); // Navigate back to Personal Information step
      setSubmitted(false); // Reset submission confirmation state
      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      });
    }, 3000);
  };

  return (
    <Container maxWidth="sm" className='mt-2'>
      <Paper elevation={3} style={{ padding: '2rem' }} className='container-style'>
        <center>
          <h3 className='heading mt-0 mb-4'>Multi-Step Form</h3>
        </center>
        <Navigation activeStep={activeStep} stepLabels={stepLabels} />
        <Box mt={2}>
          {activeStep === 0 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
          {activeStep === 1 && (
            <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          )}
          {activeStep === 2 && <Step3 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} submitted={submitted} />}
        </Box>
      </Paper>
    </Container>
  );
};

export default App;
