import * as React from 'react';
import {InputLabel, MenuItem, FormControl, Select} from '@mui/material/';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

export default function FolderSelect() {
  const [folder, setFolder] = React.useState('');

  const handleChange = (event) => {
    setFolder(event.target.value);
  };

  return (
     <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={folder}
          label="Folder"
          onChange={handleChange}
        >
          <MenuItem value={10}>Folder 1</MenuItem>
          <MenuItem value={20}>Folder 2</MenuItem>
          <MenuItem value={30}>Folder 3</MenuItem>
        </Select>
      </FormControl>
  );
}
