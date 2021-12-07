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



//Component Imports
import FolderSearch from '../components/FolderSearch'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ColorDropDown from '../components/ColorDropDown'
import FolderContainer from '../components/FolderContainer'

//Utils Imports
import { QUERY_USER, QUERY_SNIPPETS, QUERY_SINGLE_SNIPPET, QUERY_FOLDERS, QUERY_SINGLE_FOLDER, QUERY_ME } from "../utils/queries";
import { ADD_SNIPPET,UPDATE_SNIPPET,DELETE_FOLDER, DELETE_SNIPPET } from "../utils/mutations";






const Home = () => {
//-----------------------------------------------------------------
//------------------------------------------------------------------





//-----------------------------------------------------------------
//------------------------------------------------------------------
//INFO PASSED DOWN TO SNIPPET CONTAINER IN ORDER TO DISPLAY SNIPPETS WHEN EDITOR IS UPDATED
const { data, refetch } = useQuery(QUERY_SNIPPETS); 
const allSnippets = data?.snippets || [];
// console.log(allSnippets)

//logic for getting all snippets


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
  parentFolder: "All Snips"
  }

  const {data} = await updateSnippet({ variables: updatedSnippet });

  //refetch is from the snippet query, it is a function that will refresh the data
  refetch()
  setSnipName('')
  setSnippetBody('')
  setActiveSnip(null)


}
else {

  const newSnippet = {
    snippetName: snipName,
    snippetText: snippetBody,
    parentFolder: "All Snips"
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
refetch()
}

}


























//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

  return (



    <>
     
   

      {/* Add snippet/Snippet Buttons Area  */}
      <Box sx={{
        bgcolor: 'white', ml: 1, mr: 1,
        gridColumnStart: 3,
        gridColumnEnd: 5,
        gridRowStart: 7,
        gridRowEnd: 7,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center'
      }}>




        <Button variant="outlined" startIcon={<AddIcon />}>
          Snippet
        </Button>

      </Box>

      {/* This is the "Snippet Name" field */}
      <Box
        sx={{
          bgcolor: 'white', ml: 1, mr: 1,
          gridColumnStart: 5,
          gridColumnEnd: 7,
          gridRowStart: 7,
          gridRowEnd: 7
        }}>

        <TextField
          sx={{
            ml: 1,
            mr: 1,
            height: '50%',
          }}
          id="standard-basic"
          label="Snippet Name"
          name="title"
          variant="standard"
          onChange={handleInput}
          value={snipName} />
      </Box>


      {/* This is the dropdown for searching for folders */}

      <Box sx={{
        bgcolor: 'white', ml: 1, mr: 1,
        gridColumnStart: 7,
        gridColumnEnd: 10,
        gridRowStart: 7,
        gridRowEnd: 7
      }}>

        <FolderSearch />
      </Box>

      {/* This box contains the save, delete, and color buttons field */}
      <Box sx={{
        bgcolor: 'white', ml: 1, mr: 1,
        gridColumnStart: 10,
        gridColumnEnd: 13,
        gridRowStart: 7,
        gridRowEnd: 7,
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center'
      }}>

        <Button sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center', m: 1
        }} variant="outlined" onClick={saveSnippet}
        >
          <SaveIcon />
        </Button>

        <Button sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center', mr: 1
        }} variant="outlined" 
o         onClick={deleteSingleSnippet} >
          <DeleteForeverIcon />
        </Button>

        <ColorDropDown />

      </Box>

      {/* This is the container for the snippet folders  */}
      



<FolderContainer/>











      {/* This is the container for the snippets  */}
      <Box sx={{ bgcolor: 'gray', ml: 1, mr: 1, 
              gridColumnStart: 3, 
              gridColumnEnd: 5, 
              gridRowStart: 8,
              gridRowEnd: 24}} variant="filled">

{allSnippets.map((snippet)=> {
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
        gridRowStart: 8,
        gridRowEnd: 20
      }}>

        <TextField
          id="standard-multiline-static"
          sx={{
            width: '100%',
          }}
          multiline
          rows={28}
          name="body"
          value={snippetBody}
          variant="filled"
          onChange={handleInput}
        />


      </Box>
    </>




  );



};
export default Home;
