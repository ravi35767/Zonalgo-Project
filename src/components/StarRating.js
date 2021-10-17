import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Rating from "@mui/material/Rating";

export default function StarRating() {
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel value="2-star" control={<Radio />} label="2 Star" />
          <Rating
            name="half-rating-read"
            defaultValue={2}
            precision={0.2}
            readOnly
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel value="3-star" control={<Radio />} label="3 Star" />
          <Rating
            name="half-rating-read"
            defaultValue={3}
            precision={0.2}
            readOnly
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel value="4-star" control={<Radio />} label="4 Star" />
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={0.2}
            readOnly
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel value="5-star" control={<Radio />} label="5 Star" />
          <Rating
            name="half-rating-read"
            defaultValue={5}
            precision={0.2}
            readOnly
          />
        </div>
      </RadioGroup>
    </FormControl>
  );
}
