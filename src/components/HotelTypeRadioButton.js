import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function HotelTypeRadioButton() {
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
        <FormControlLabel value="female" control={<Radio />} label="Hotel" />
        <FormControlLabel value="male" control={<Radio />} label="Hotels" />
      </RadioGroup>
    </FormControl>
  );
}
