import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";

import "../App.css";
//import S3 from 'react-aws-s3';
import {InputLabel, MenuItem, FormControl, Select, Button, TextField, Box} from "@mui/material/";


import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderSearch from '../components/FolderSearch'


const Home = () => {




  return (
  


<>


{/* NavBar */}
{/* <Box sx={{ bgcolor: 'black'}} gridColumn ='span 12' gridRow ='span 2' >
<h1 sx={{color:'white'}}>StoYo.Code</h1>
</Box> */}



{/* New Folder & Snippet Buttons */}
<Box sx={{ bgcolor: 'white', ml: 1, mr: 1, 
              gridColumnStart: 1, 
              gridColumnEnd: 4, 
              gridRowStart: 7,
              gridRowEnd: 7,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'}}>


  <Button variant="outlined" startIcon={<AddIcon />}>
  Folder
  </Button>

  <Button variant="outlined" startIcon={<AddIcon />}>
  Snippet
  </Button>

</Box>





{/* This is the "Snippet Name" field */}
<Box sx={{ bgcolor: 'white', ml: 1, mr: 1, 
              gridColumnStart: 4, 
              gridColumnEnd: 7, 
              gridRowStart: 7,
              gridRowEnd: 7}}>
<TextField sx={{  ml: 1, mr: 1, 
              height: '50%',
              
              }}id="standard-basic" label="Snippet Name" variant="standard" />



</Box>



<FolderSearch />






{/* This box contains the save, delete, and color buttons field */}
<Box sx={{ bgcolor: 'white', ml: 1, mr: 1, 
              gridColumnStart: 10, 
              gridColumnEnd: 13, 
              gridRowStart: 7,
              gridRowEnd: 7,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'}}>

           


<Button  sx={{ 
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'}}variant="outlined" >
  <SaveIcon />
  </Button>

<Button  sx={{ 
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'}} variant="outlined" >
  <DeleteForeverIcon />
  </Button>

<Button  sx={{ 
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'}}variant="outlined">
  <ColorLensIcon />
<ArrowDropDownIcon/>
  </Button>
</Box>






  <Box sx={{ bgcolor: 'gray', ml: 1, mr: 1, 
              gridColumnStart: 1, 
              gridColumnEnd: 4, 
              gridRowStart: 8,
              gridRowEnd: 20}}>
  <Button sx={{ bgcolor: 'black',  m: 1, width:'90%'}} variant="contained" color="success" >
  Snippet 1
</Button>

  </Box>
<Box sx={{ bgcolor: 'gray', ml: 1, mr: 1, 
              gridColumnStart: 4, 
              gridColumnEnd: 13, 
              gridRowStart: 8,
              gridRowEnd: 20}}></Box>












  {/* <TextField
          sx={{ 


 bgcolor: 'gray'}} gridColumn ='span 6' gridRow ='span 2'
          id="standard-multiline-static"
          label="Code"
          multiline
          block
          defaultValue="//New Snip!"
          variant="standard"/> */}
        
 

  {/* <Button sx={{ gridArea: 'Button'}}>Hello!</Button> */}
</>




  );



};
export default Home;
