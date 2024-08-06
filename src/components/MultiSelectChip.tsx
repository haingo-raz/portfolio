import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 300,
      width: 250,
    },
  },
};

interface MultipleSelectChipProps {
  names: string[];
  chipNameValue: string[];
  handleChange: (event: SelectChangeEvent<string[]>, child: React.ReactNode) => void;
  chipColor?: string;
}

export default function MultipleSelectChip(props: MultipleSelectChipProps) {
  return (
    <div>
      <FormControl variant="filled" sx={{ m:1.5, width: 350 }}>
        <InputLabel id="chip-label">Filter by technology/tool</InputLabel>
        <Select
          labelId="chip-label"
          id="multiple-chip-select"
          multiple
          value={props.chipNameValue}
          onChange={props.handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, maxHeight: 150, overflow: 'auto', padding: 1 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} style={{backgroundColor: props.chipColor}}/>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}