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


    // const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setFolderDropDown(event.target.value);
  };





return (
 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Folder</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={folderDropDown}
          onChange={handleChange}
          label="Folder"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>


{folderData.map((folder)=>{


return (
          <MenuItem value={folder.folderName} key={folder._id}>{folder.folderName}</MenuItem>       
  );

})
}
    </Select></FormControl>

)

}


