import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import RadioButton from "./RadioButton";
import HotelTypeRadioButton from "./HotelTypeRadioButton";
import StarRating from "./StarRating";

function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { "aria-label": "Switch demo" } };

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function SideMenu() {
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
        transition: "0.3s",
        borderRadius: "15px",
        zIndex: 30,
        height: "auto",
      }}
    >
      <CardContent>
        <Box
          sx={{
            boxShadow: 2,
            bgcolor: "background.paper",
            m: 1,
            p: 1,
            width: "auto",
            height: "auto",
            borderRadius: 2,
          }}
        >
          <Typography style={{ display: "flex" }}>Our Advice</Typography>
          <Typography
            style={{ display: "flex", color: "#000ffe", marginBottom: 5 }}
          >
            Now's a great time to look
          </Typography>
          <Typography
            style={{ display: "flex", color: "darkgray", textAlign: "initial" }}
          >
            Prices are unlikely to get any better before you travel
          </Typography>
          <hr />
          <Typography
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Price Alert <Switch {...label} />
          </Typography>
        </Box>
        <Typography style={{ display: "flex" }}>
          <b>Price</b>
        </Typography>
        <hr />
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Typography style={{ display: "flex", marginBottom: 15 }}>
          from &nbsp; <b>Rs 26700 &nbsp;</b> to&nbsp; <b>Rs 96500</b>
        </Typography>
        <Typography style={{ display: "flex" }}>
          <b>Meal Type</b>
        </Typography>
        <hr />
        <RadioButton />
        <Typography style={{ display: "flex", marginBottom: 15 }}>
          <b>Hotel Type</b>
        </Typography>
        <hr />
        <HotelTypeRadioButton />
        <Typography style={{ display: "flex", marginBottom: 15 }}>
          <b>Star Rating</b>
        </Typography>
        <hr />
        <StarRating />
      </CardContent>
    </Card>
  );
}
