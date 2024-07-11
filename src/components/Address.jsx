import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { address1, address2, city, state, zip } = formData;
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!address1) tempErrors.address1 = 'Address Line 1 is required';
    if (!city) tempErrors.city = 'City is required';
    if (!state) tempErrors.state = 'State is required';
    if (!zip) tempErrors.zip = 'Zip Code is required';
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
        label="Address Line 1"
        name="address1"
        value={address1}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.address1}
        helperText={errors.address1}
      />
      <TextField
        label="Address Line 2"
        name="address2"
        value={address2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.state}
        helperText={errors.state}
      />
      <TextField
        label="Zip Code"
        name="zip"
        value={zip}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.zip}
        helperText={errors.zip}
      />
      <Button variant="contained" color="primary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext} className='m-3 mb-0 mt-1'>
        Next
      </Button>
    </div>
  );
};

export default Step2;
