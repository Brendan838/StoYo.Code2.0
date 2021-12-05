import * as React from 'react';
import {Button, Box} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
export default function SnippetContainer() {
//   const [folder, setFolder] = React.useState('');

//   const handleChange = (event) => {
//     setFolder(event.target.value);
//   };
function thisWorked() {
alert("this worked!")
}

    const snippetArray = [

  {
  id: 1, 
  name: 'REACT'
  },

  {
  id: 2, 
  name: 'JQUERY'
  },
  {
  id: 3, 
  name: 'CDNS'
  }

  ]



const listOfSnips = snippetArray.map((snippet)=> {
return (<Button
sx={{ 
bgcolor: 'black', 
m: 1, 
width:'90%'
}} 
variant="contained" 
color="success" 
startIcon = { <FolderOpenIcon/> }
key = {snippet.id}
onClick = {thisWorked}
>
{snippet.name}
</Button>)
});

  return (
     







  <Box sx={{ bgcolor: 'gray', ml: 1, mr: 1, 
              gridColumnStart: 3, 
              gridColumnEnd: 5, 
              gridRowStart: 8,
              gridRowEnd: 24}} variant="filled">

  {listOfSnips}

  </Box>

  );
}
