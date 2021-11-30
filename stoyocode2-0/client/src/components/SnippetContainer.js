import * as React from 'react';
import {Button, Box} from '@mui/material/';
import SnippetList from './SnippetList'

export default function SnippetContainer() {
//   const [folder, setFolder] = React.useState('');

//   const handleChange = (event) => {
//     setFolder(event.target.value);
//   };

    const snippets = [

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

  <SnippetList snippetArray = {snippets}/>

  </Box>

  );
}
