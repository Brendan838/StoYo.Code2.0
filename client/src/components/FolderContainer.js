import React, { useState } from 'react';
import {Button, Box, } from '@mui/material/';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {ADD_USER} from '../utils/mutations';
import ClearIcon from '@mui/icons-material/Clear';
import {useMutation, useQuery} from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { QUERY_USER, QUERY_SNIPPETS, QUERY_SINGLE_SNIPPET, QUERY_FOLDERS, QUERY_SINGLE_FOLDER, QUERY_ME } from "../utils/queries";
import {DELETE_FOLDER} from '../utils/mutations'

export default function FolderContainer() {

//Data to display folders
const { data } = useQuery(QUERY_FOLDERS); 
const folderData = data?.folders || [];
//function 
const [deleteOneFolder] = useMutation(DELETE_FOLDER);



// const [mainDeleteButton, setMainDeleteButton] = useState(false)
//function that will eventually help display the snippets in a given folder
function showSnips() {
alert('showing snippets!')
}

async function deleteFolder(folderId) {

console.log(folderId)
alert(`${folderId} is being deleted`)
  try {
      //const response = await createUser(userFormData);
      //set up useMutation hook
      const {data }= await deleteOneFolder({ variables: folderId });
      }

      //pass in token recevied from mutation response
     
    catch (err) {
      console.error(err);
     
    }



}


//function that on click will make the x icons appear to delete folders


// function toggleDelete() {
// if (mainDeleteButton === false) {
// setMainDeleteButton(true)
// setDeleteButtons(

// )
// }
// else {
// setMainDeleteButton(false)
// }
// console.log(mainDeleteButton)
// }

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

    <Button variant="outlined" 
    sx={{
    mr: 1
    }}startIcon={<AddIcon />} >
    Folder
    </Button>

    {/* <Button variant="outlined" onClick = {toggleDelete} >
    <DeleteForeverIcon />
    </Button> */}

</Box>

{/* Folder Container */}
<Box 
sx={{ 
bgcolor: 'gray', 
ml: 1, 
mr: 1, 
gridColumnStart: 1, 
gridColumnEnd: 3, 
gridRowStart: 8,
gridRowEnd: 24}} 
variant="filled"
>

  {/* Folders */}
{folderData.map((folder)=> {

return (

<>
  <Button
    sx={{ 
    bgcolor: 'black', 
    m: 1, 
    width:'90%'
    }} 
  variant="contained" 
  color="success" 
  startIcon = { <FolderOpenIcon/> }
  endIcon = {<ClearIcon onClick = {(e)=> {
e.stopPropagation()
deleteFolder(folder._id)}}/>}
  
  key= {folder._id}
  onClick = {showSnips}
  >
  {folder.folderName}

  </Button>
  
</>
)
})
}


  </Box>




</>
  );



}
