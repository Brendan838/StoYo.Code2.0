import * as React from 'react';
import {Button, Box} from '@mui/material/';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderList from './FolderList'


export default function FolderContainer() {
//   const [folder, setFolder] = React.useState('');

//   const handleChange = (event) => {
//     setFolder(event.target.value);
//   };

 //get Folders for this user
 //for each folder that exists, create a folder button
  const folders = [

  {
  id: 1, 
  name: 'javascript'
  },

  {
  id: 2, 
  name: 'html'
  },
  {
  id: 3, 
  name: 'CSS'
  }

  ]
 


  return (
  <Box sx={{ bgcolor: 'gray', ml: 1, mr: 1, 
              gridColumnStart: 1, 
              gridColumnEnd: 3, 
              gridRowStart: 8,
              gridRowEnd: 24}} variant="filled">

  <FolderList folderArray = {folders}/>

  </Box>

  );
}
