
//NPM Library Imports
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import Auth from '../utils/auth';

import {useMutation, useQuery} from '@apollo/client';
import "../App.css";
//import S3 from 'react-aws-s3';
import { Button, TextField, Box } from "@mui/material/";


import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

//Component Imports
import FolderSearch from '../components/FolderSearch'

import MainTextField from '../components/MainTextField'
import ColorDropDown from '../components/ColorDropDown'
import SnippetContainer from '../components/SnippetContainer'
import FolderContainer from '../components/FolderContainer'
import { QUERY_USER, QUERY_SNIPPETS, QUERY_SINGLE_SNIPPET, QUERY_FOLDERS, QUERY_SINGLE_FOLDER, QUERY_ME } from "../utils/queries";







const Home = () => {

//folder logic
// function getFolderData({ Auth. }) { 
//  const { loading, error, data } = useQuery(GET_CARS); 
//  if (loading) return '<Loading />'; 
//  if (error) return `Error! ${error.message}`; 
//  return ( 
//   <select name="car" onChange={onCarSelected}>
//  {data.cars.map(car => 
//   ( <option key={car.id} value={car.model}> 
//   {car.model} 
//   </option> ))} 
//   </select> 
//   ); 
// }




const { loading, error, data } = useQuery(QUERY_FOLDERS); 





// const getFolderData = async

  const [snipName, setSnipName] = useState('')
  const [snippetBody, setSnippetBody] = useState('')



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

  const saveSnippet = function () {
    //This is where we need to save snippet name and title
    //declare new object that will be sent via useMutation
    const newSnippet = {
      name: snipName,
      snippet: snippetBody
    }

    //instead of alert- we can use async and await and a utils function to send this data to data base.
    alert(`You submitted a new snippet called ${newSnippet.name}`)
    setSnipName('')
    setSnippetBody('')
    //run an appllo cache function to reset the results of the 

  }


  return (



    <>
      {/* Folder Buttons Area*/}
      {/* <Box sx={{
        bgcolor: 'white', ml: 1, mr: 1,
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 7,
        gridRowEnd: 7,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center'
      }}>


        <Button variant="outlined" startIcon={<AddIcon />}>
          Folder
        </Button>
      </Box> */}

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
        }} variant="outlined" >
          <DeleteForeverIcon />
        </Button>

        <ColorDropDown />

      </Box>

      {/* This is the container for the snippet folders  */}
      <FolderContainer data = {data}/>

      {/* This is the container for the snippets  */}
      <SnippetContainer data = {data} />


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
