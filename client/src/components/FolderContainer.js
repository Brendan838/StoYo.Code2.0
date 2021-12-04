import * as React from 'react';
import {Button, Box} from '@mui/material/';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderList from './FolderList'


export default function FolderContainer() {
//   const [folder, setFolder] = React.useState('');

//   const handleChange = (event) => {
//     setFolder(event.target.value);
//   };

const folderArray = [

{
name: "javascript",
id: 1

}

]


 //get Folders for this user
 //for each folder that exists, create a folder button
  function thisWorked() {
alert("this worked!")
}

const listOfFolders = folderArray.map((folder)=> {
return (
<Button
  sx={{ 
  bgcolor: 'black', 
  m: 1, 
  width:'90%'
  }} 
variant="contained" 
color="success" 
startIcon = { <FolderOpenIcon/> }
key = {folder.id}
onClick = {thisWorked}
>
{folder.name}
</Button>)
});



  return (
  <Box sx={{ bgcolor: 'gray', ml: 1, mr: 1, 
              gridColumnStart: 1, 
              gridColumnEnd: 3, 
              gridRowStart: 8,
              gridRowEnd: 24}} variant="filled">

  {
listOfFolders
}

  </Box>

  );
}
