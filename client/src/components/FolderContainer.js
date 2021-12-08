import React, { useState } from 'react';
import {Button, Box, TextField } from '@mui/material/';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';


import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {ADD_USER} from '../utils/mutations';
import ClearIcon from '@mui/icons-material/Clear';
import {useMutation, useQuery} from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { QUERY_USER, QUERY_SNIPPETS, QUERY_SINGLE_SNIPPET, QUERY_FOLDERS, QUERY_SINGLE_FOLDER, QUERY_ME } from "../utils/queries";
import {DELETE_FOLDER, ADD_FOLDER} from '../utils/mutations'

export default function FolderContainer({setCurrentlySelectedFolder}) {








//Data to display folders
const { data, refetch } = useQuery(QUERY_FOLDERS); 
const folderData = data?.folders || [];
//function 
const [deleteOneFolder] = useMutation(DELETE_FOLDER);

const [showAddFolderUI, setShowAddFolderUI] = useState(false)
const [folderName, setFolderName] = useState('')


const [createNewFolder] = useMutation(ADD_FOLDER)

function handleInput(e) {
  
setFolderName(e.target.value)

}


// const [mainDeleteButton, setMainDeleteButton] = useState(false)
//function that will eventually help display the snippets in a given folder
function showSnips() {
alert('showing snippets!')


}









async function deleteFolder(folderId) {

const deleteFolder = {
folderId: folderId
}

const {data} = await deleteOneFolder({ variables: deleteFolder });

console.log(data)
  
document.location.reload();
}



async function createFolder(){
if (folderName.length < 3){
alert("Please enter a name at least 3 characters long")
return
}

const newFolder = {
folderName: folderName
}

const {data} = await createNewFolder({variables: newFolder})
console.log(data)
refetch();
setShowAddFolderUI(false)
setFolderName('')
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
{/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}



{/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
   

{(showAddFolderUI === true) ? (
<>
<TextField
sx={{
  ml: 1,
  mr: 1,
  height: '50%',
}}
          id="standard-basic"
          label="Folder Name"
          name="title"
          variant="standard"
          onChange={handleInput}
          value={folderName} 
/>
<Button 
sx={{
display: 'flex',
justifyContent: 'space-around',
alignItems: 'center', 
m: 1
}} 
variant="outlined" 
onClick={createFolder}
>
<ArrowUpwardIcon/>
</Button>

<Button sx={{
display: 'flex',
justifyContent: 'space-around',
alignItems: 'center', 
m: 1
}} 
variant="outlined" 
onClick={()=>{setShowAddFolderUI(false)}}
>
<ClearIcon/>
</Button>
</>) :
(
  <Button variant="outlined" 
    sx={{
    mr: 1
    }}startIcon={<AddIcon />} 
    onClick = {()=>{setShowAddFolderUI(true)}}
    >
    Folder

    </Button> 
)}






    {/* <Button variant="outlined" onClick = {toggleDelete} >
    <DeleteForeverIcon />
    </Button>



{/* Folder Container */}
</Box>
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
  onClick = {()=>{
setCurrentlySelectedFolder(folder.folderName)

  }}
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
