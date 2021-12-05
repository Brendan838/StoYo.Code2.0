import React, { useState } from 'react';
import {Button, Box, } from '@mui/material/';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {ADD_USER} from '../utils/mutations';

import { QUERY_FOLDERS} from "../utils/queries";
import { useQuery} from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';

export default function FolderContainer({data}) {
//   const [folder, setFolder] = React.useState('');

//   const handleChange = (event) => {
//     setFolder(event.target.value);
//   };






console.log(data.folders)
const folderArray = 

[


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

const listOfFolders = folderArray.map(folder=> {



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
key = {folder._id}
onClick = {thisWorked}
>
{folder.folderName}
</Button>)
});



  return (
<>
 {/* Folder Buttons Area*/}
      <Box sx= {{
        bgcolor: 'white', ml: 1, mr: 1,
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 7,
        gridRowEnd: 7,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center'
      }}>


        <Button variant="outlined" sx={{
          
           mr: 1
        }}startIcon={<AddIcon />} >
          Folder
        </Button>
<Button variant="outlined"  >
           <DeleteForeverIcon />
        </Button>
      </Box>


  <Box sx={{ bgcolor: 'gray', ml: 1, mr: 1, 
              gridColumnStart: 1, 
              gridColumnEnd: 3, 
              gridRowStart: 8,
              gridRowEnd: 24}} variant="filled">

  {
listOfFolders
}

  </Box>




</>
  );
}
