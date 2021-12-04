import * as React from 'react';
import {Button} from '@mui/material/';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

export default function SnippetList({snippetArray}) {
//   const [folder, setFolder] = React.useState('');

//   const handleChange = (event) => {
//     setFolder(event.target.value);
//   };

//get Folders for this user
//for each folder that exists, create a folder button
function thisWorked() {
alert("this worked!")
}

const listOfSnips = snippetArray.map((snippet)=> {
return <Button
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
{snippet.name}
</Button>
});

return (
<>
{listOfSnips}
</>
);
}
