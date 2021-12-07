import * as React from 'react';
import {Button} from '@mui/material/';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function ColorDropDown() {
//   const [folder, setFolder] = React.useState('');

//   const handleChange = (event) => {
//     setFolder(event.target.value);
//   };

  return (
  	<Button  sx={{ 
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center', mr:1 }}variant="outlined">
		<ColorLensIcon />
		<ArrowDropDownIcon/>
  	</Button>

  );
}
