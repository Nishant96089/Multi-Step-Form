import React from 'react';
import { Button } from '@mui/material';

const Step3 = ({ formData, prevStep, handleSubmit, submitted }) => {
  return (
    <div>
      <h3>Confirm Your Details</h3>
      {/* Previewing the form data in raw form */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      {submitted && (
        <div className="submission-confirmation">
          <span className="tick-mark">✔️</span>
          <p>Form data submitted</p>
        </div>
      )}
      <Button variant="contained" color="primary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={submitted} className='m-3 mb-0 mt-1'>
        Submit
      </Button>
    </div>
  );
};

export default Step3;
