import React, { useState, useEffect } from "react";
import {Button, Box} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { QUERY_USER, QUERY_SNIPPETS, QUERY_SINGLE_SNIPPET, QUERY_FOLDERS, QUERY_SINGLE_FOLDER, QUERY_ME } from "../utils/queries";
import {useMutation, useQuery} from '@apollo/client';


export default function SnippetContainer({allSnippets, getSnipetLIst, refetch}) {




// const { data } = useQuery(QUERY_SNIPPETS); 
// const allSnippets = data?.snippets || [];
// console.log(allSnippets)


// function allSnippets(){
// const { data } = useQuery(QUERY_SNIPPETS); 
// const allSnippets = data?.snippets || [];
// return allSnippets
// }


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






  return (
     







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
key = {snippet.id}
onClick = {thisWorked}
>
{snippet.snippetName}
</Button>)
})
}

  </Box>

  );
}
