import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButton() {
  return (
    <FormControl
      component="fieldset"
      style={{ display: "flex", marginBottom: 10 }}
    >
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="RoomOnly"
          control={<Radio />}
          label="Room Only"
        />
        <FormControlLabel
          value="Bed-&-Breakfast"
          control={<Radio />}
          label="Bed & Breakfast"
        />
        <FormControlLabel
          value="Only-Bed"
          control={<Radio />}
          label="Only Bed"
        />
        <FormControlLabel value="Nomeal" control={<Radio />} label="Nomeal" />
        <FormControlLabel
          value="Breakfast"
          control={<Radio />}
          label="Breakfast"
        />
      </RadioGroup>
    </FormControl>
  );
}
