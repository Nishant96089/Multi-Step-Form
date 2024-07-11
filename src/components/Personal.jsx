import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const { name, email, phone } = formData;
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [setFormData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = 'Name is required';
    if (!email) tempErrors.email = 'Email is required';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) tempErrors.email = 'Invalid email format';
    }
    if (!phone) tempErrors.phone = 'Phone is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      console.log('Form Data:', formData);
      localStorage.setItem('formData', JSON.stringify(formData));
      nextStep();
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        name="name"
        value={name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.phone}
        helperText={errors.phone}
      />
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default Step1;
