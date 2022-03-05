import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  InputLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { useAlertReducer } from './AlertManager';

const alertTypeOptions = [
  {
    id: 1,
    value: 'error',
    label: 'Error',
  },
  {
    id: 2,
    value: 'warning',
    label: 'Warning',
  },
  {
    id: 3,
    value: 'info',
    label: 'Info',
  },
  {
    id: 4,
    value: 'success',
    label: 'Success',
  },
];

const AlertExample = () => {
  const { addAlert } = useAlertReducer();
  const [alertType, setAlertType] = useState('info');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [timeUnit, setTimeUnit] = useState('');

  const handleAdd = () => {
    if (!!text) {
      addAlert(
        null,
        !!timeUnit ? parseInt(timeUnit) * 1000 : null,
        text,
        link,
        alertType,
        title
      );
    }
  };

  return (
    <>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={4}>
          <Box component='form' sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              fullWidth
              id='title'
              label='Title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='text'
              label='Text'
              name='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <TextField
              margin='normal'
              fullWidth
              name='link'
              label='Link'
              id='link'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <TextField
              margin='normal'
              fullWidth
              name='timelimit'
              label='Time Limit (Seconds)'
              id='timelimit'
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
            />
            <InputLabel sx={{ mt: 2 }} id='alertTypeLabel'>
              Alert Type
            </InputLabel>
            <RadioGroup
              row
              aria-labelledby='alertTypeLabel'
              id='alert-type'
              name='alert-type'
              value={alertType}
              onChange={(e) => setAlertType(e.target.value)}
            >
              {alertTypeOptions.map((option) => (
                <FormControlLabel
                  key={option.id}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
            <Button
              onClick={handleAdd}
              fullWidth
              variant='contained'
              sx={{ mt: 3 }}
            >
              Add Alert
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AlertExample;
