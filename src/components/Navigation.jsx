import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const Navigation = ({ activeStep, stepLabels }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {stepLabels.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default Navigation;
