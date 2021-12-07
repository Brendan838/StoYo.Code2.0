import * as React from 'react';
import {InputLabel, MenuItem, FormControl, Select} from '@mui/material/';
import { QUERY_USER, QUERY_SNIPPETS, QUERY_SINGLE_SNIPPET, QUERY_FOLDERS, QUERY_SINGLE_FOLDER, QUERY_ME } from "../utils/queries";
import {useQuery} from '@apollo/client'
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

export default function FolderSelect({folderDropDown, setFolderDropDown}) {

  const { data, refetch } = useQuery(QUERY_FOLDERS); 
  const folderData = data?.folders || [];


  

  const handleChange = (event) => {
    setFolderDropDown(event.target.value);
  };


return (

     <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={folderDropDown}
          label="Folder"
          onChange={handleChange}
        >


{folderData.map((folder)=>{


return (
          <MenuItem value={folder.folderName} key={folder._id}>{folder.folderName}</MenuItem>       
  );

})
}

 </Select>
      </FormControl>


)
}
