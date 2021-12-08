import React, { useState } from "react";

//ApolloImports
import {useMutation, useQuery} from '@apollo/client';
import "../App.css";
//import S3 from 'react-aws-s3';
import { Button, TextField, Box } from "@mui/material/";

//MaterialUI Icons
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PageviewIcon from '@mui/icons-material/Pageview';
import Fab from '@mui/material/Fab';

//Component Imports
import FolderSearch from '../components/FolderSearch'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ColorDropDown from '../components/ColorDropDown'
import FolderContainer from '../components/FolderContainer'

//Utils Imports
import { QUERY_USER, QUERY_SNIPPETS, QUERY_SINGLE_SNIPPET, QUERY_FOLDERS, QUERY_SINGLE_FOLDER, QUERY_ME } from "../utils/queries";
import { ADD_SNIPPET,UPDATE_SNIPPET,DELETE_FOLDER, DELETE_SNIPPET } from "../utils/mutations";






const Home = () => {

const [folderDropDown, setFolderDropDown] = useState('');
//-----------------------------------------------------------------
//------------------------------------------------------------------





//-----------------------------------------------------------------
//------------------------------------------------------------------
//INFO PASSED DOWN TO SNIPPET CONTAINER IN ORDER TO DISPLAY SNIPPETS WHEN EDITOR IS UPDATED
const { data, refetch} = useQuery(QUERY_SNIPPETS); 
const allSnippets = data?.snippets || [];
// console.log(allSnippets)
// const [snipButtons, setSnipButtons] = useState(allSnippets)
//logic for getting all snippets

const [currentlySelectedFolder, setCurrentlySelectedFolder] = useState("")

function showRelevantSnippets(){
if (currentlySelectedFolder == allSnippets) {

return allSnippets
}

else {
refetch()
const snippets = allSnippets.filter(snippet => 
snippet.parentFolder === currentlySelectedFolder
);

return snippets
}
}

//snippet mustations and useState variables
const [updateSnippet] = useMutation(UPDATE_SNIPPET);
const [addSnippet] = useMutation(ADD_SNIPPET);
const [snipName, setSnipName] = useState('')
const [snippetBody, setSnippetBody] = useState('')
const [activeSnip, setActiveSnip] = useState(null)
const [deleteSnippet] = useMutation(DELETE_SNIPPET);

//function allowing textfields to work with our useState
function handleInput(e) {
  let inputType = e.target.name;
  let inputValue = e.target.value;

  switch (inputType) {
    case ('title'):
      setSnipName(inputValue);
      break;
    case ('body'):
      setSnippetBody(inputValue);
      break;
  }
}

// This function will either save or update a function depending on whether "activeSnip" has a snip ID in it. It gets a snipID if a snip folder is clicked on.
const saveSnippet = async function () {
 
if (activeSnip !== null){

  const updatedSnippet = {
  _id: activeSnip,
  snippetName: snipName,
  snippetText: snippetBody,
  parentFolder: folderDropDown
  }

  const {data} = await updateSnippet({ variables: updatedSnippet });

  //refetch is from the snippet query, it is a function that will refresh the data
  refetch()
  setSnipName('')
  setSnippetBody('')
  setActiveSnip(null)
  setFolderDropDown('')


}
else {

  const newSnippet = {
    snippetName: snipName,
    snippetText: snippetBody,
    parentFolder: folderDropDown
  }

  try {
  // console.log(newSnippet)
  const {data} = await addSnippet({ variables: newSnippet });
  // console.log(data)
  const userData = data?.addSnippet || {};

  // console.log(userData)

  //refetch is from line 40- allows us to have the snippet container update display when a new snippet is submitted
  refetch()

  }
  catch {
  console.log("error submitting snippet!")
  }
  // alert(`You submitted a new snippet called ${newSnippet.snippetName}`)
  setSnipName('')
  setSnippetBody('')

}
}

//-------------------------------------------------------------------------------------
//Snippet Delete Logic

async function deleteSingleSnippet() {
if (activeSnip !== null) {
console.log(activeSnip)
const deletedSnip = {
  _id: activeSnip
}

const {data} = await deleteSnippet({variables: deletedSnip})
console.log(data)
setSnipName('')
setSnippetBody('')
setActiveSnip(null)
setFolderDropDown("")

refetch()
showRelevantSnippets(currentlySelectedFolder)

}

}


























//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Overall return for home page
return (

<>
     

<FolderContainer setCurrentlySelectedFolder = {setCurrentlySelectedFolder}/>

{/* !!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!*/}
{/* Buttons above Snippet Container  */}
<Box sx={{
  bgcolor: 'white', ml: 1, mr: 1,
  gridColumnStart: 3,
  gridColumnEnd: 5,
  gridRowStart: 5,
  gridRowEnd: 6,
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center'
}}>

{/* Button to View all Snippets */}
<Button 
sx = {{mr:1}}
variant="outlined" startIcon={<PageviewIcon/>} onClick ={()=>{
  console.log(allSnippets)
  setCurrentlySelectedFolder(allSnippets);
  // showRelevantSnippets();
  console.log(currentlySelectedFolder)

}}>
View All
</Button>
{/* Button to View all Snippets */}
<Button variant="outlined" startIcon={<PageviewIcon/>} onClick ={()=>{
  refetch()
  setCurrentlySelectedFolder("")
  showRelevantSnippets();
  console.log(currentlySelectedFolder)

}}>
Snips
</Button>

</Box>





<Box
sx={{
  bgcolor: 'white', ml: 1, mr: 1,
  gridColumnStart: 5,
  gridColumnEnd: 14,
  gridRowStart: 5,
  gridRowEnd: 5,
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center'
}}>

<Button variant="outlined" onClick ={()=>{
  setSnipName('')
  setSnippetBody('')
  setActiveSnip(null)
  setFolderDropDown('')
}}>
  <AddIcon/>
</Button>


<Button 
sx={{
display: 'flex',
justifyContent: 'space-around',
alignItems: 'center', m: 1
}} variant="outlined" onClick={saveSnippet}
>
  <SaveIcon />
</Button>

<Button 
sx={{
display: 'flex',
justifyContent: 'space-around',
alignItems: 'center', mr: 1
}} variant="outlined" 
onClick={deleteSingleSnippet}>
<DeleteForeverIcon />
</Button>




<TextField
sx={{
  ml: 2,
 
  // height: '50%',
}}
id="standard-basic"
label="Snippet Name"
name="title"
variant="standard"
onChange={handleInput}
value={snipName} />

<FolderSearch 


folderDropDown = {folderDropDown} 
setFolderDropDown = {setFolderDropDown}
/>

</Box>
      
      {/* This is the container for the snippets  */}
<Box 
sx={{ bgcolor: 'gray', ml: 1, mr: 1, 
gridColumnStart: 3, 
gridColumnEnd: 5, 
gridRowStart: 6,
gridRowEnd: 24}} variant="filled">

{showRelevantSnippets().map((snippet)=> {
return (<Button
sx={{ 
bgcolor: 'black', 
m: 1, 
width:'90%'
}} 
variant="contained" 
color="success" 
startIcon = { <FolderOpenIcon/> }
key = {snippet._id}
onClick = {()=>{ 
setSnipName(snippet.snippetName)
setSnippetBody(snippet.snippetText)
setActiveSnip(snippet._id)
setFolderDropDown(snippet.parentFolder)

}}
>
{snippet.snippetName}
</Button>)
})
}

  </Box>


      {/* This is the Text Area for snippets */}
      <Box sx={{
        bgcolor: 'white', ml: 1, mr: 1,
        gridColumnStart: 5,
        gridColumnEnd: 13,
        gridRowStart: 6,
        gridRowEnd: 20
      }}>

        <TextField
          id="standard-multiline-static"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'top'
          }}
          multiline
          rows={31}
          name="body"
          value={snippetBody}
          variant="filled"
          onChange={handleInput}


        >



</TextField>

      </Box>
    </>




  );



};
export default Home;
