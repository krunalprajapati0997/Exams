import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Paper , FormControl,FormLabel,Radio ,FormControlLabel,RadioGroup,InputLabel,
  MenuItem,Select,Checkbox, FormGroup } from '@material-ui/core'
 import  { useState } from 'react'
// import Autocomplete from '@mui/material/Autocomplete';
import { Button} from 'react-bootstrap' 
import VisibilityIcon from '@mui/icons-material/Visibility';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Infromation() {
  const paperStyle={padding:'30px 20px', width:300,margin:'20px auto'}
  const marginTop={marginTop:5}
  const [city,setCity]=useState('');
  const [age,setAge]=useState('');
  

  const handleChange = (event) => {
    setCity(event.target.value);
    setAge(event.target.value);
  };
  return (
     <Grid>

    <Paper elevation={20} style={paperStyle}>
  <Grid align ='center'>
      <h2> Information Form</h2>
  </Grid>
      <form>
      {/* <TextField fullWidth id="standard-basic" label="Standard" variant="standard" /> */}
        <TextField fullWidth label='Name ' className='mb-3 my-3'/>
        <TextField fullWidth label='Email'/>
        <br/>  
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"  className='mb-3 my-3' style={marginTop}>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
              </RadioGroup>
            </FormControl>  
            <Box sx={{ minWidth: 120 }}> 
            <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" >Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> 
        </Box> 
        {/* <FormControl component='fieldset' style={marginTop}>
      <FormLabel component='legend' >Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        style={{ display: 'initial' }}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        
      </RadioGroup>
    </FormControl> */}
    <TextField fullWidth label='Phone Number'  className='mb-3 my-3'
                InputProps={{endAdornment: 
                  ( 
                    <InputAdornment position='end'>
                    <IconButton>
                    <PhoneAndroidIcon />
                    </IconButton>
                    </InputAdornment>
                 )
              }}
    
    />
    <TextField fullWidth label='Password' className='mb-3 my-3' type='password'  
     InputProps={{endAdornment: 
                ( 
                  <InputAdornment position='end'>
                  <IconButton  >
                  <VisibilityIcon />
                  </IconButton>
                  </InputAdornment>
               )
            }}
            >
</TextField>
                      

                 
    <TextField fullWidth label='Confirm Password' className='mb-3 my-3' />
    <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="city"
            onChange={handleChange}
          >
            <MenuItem value={1}>Ahmedabad</MenuItem>
            <MenuItem value={2}>Gandhinager</MenuItem>
            <MenuItem value={3}>Kalol</MenuItem>
          </Select>
        </FormControl>
        <FormGroup>
        <FormControlLabel control={<Checkbox Checked />} label="  I agree with T & C "   className='mb-3 my-3'/>

        </FormGroup>
        
        <br />
        <Grid align='center'>
          <Button type='submit' class='btn btn-primary'>Submit</Button>

        </Grid>
      </form>
    </Paper>
  </Grid>
  )
}

export default Infromation



