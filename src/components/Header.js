import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import PostsCard from "./PostsCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";
export default function Header() {
  const [value, setValue] = React.useState("1");
  const [age, setAge] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeDropdown = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: "98%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "42%",
            }}
          >
            <Button
              variant="outlined"
              startIcon={<FilterAltIcon />}
              style={{ marginRight: 5, marginLeft: 5, marginBottom: 5 }}
            >
              Filter
            </Button>
            <Typography sx={{ fontSize: 14 }}>
              Ressult <br /> 1617 Properties Found
            </Typography>
          </Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Our Top Pick" value="Our Top Pick" />
            <Tab label="Price (lowest first)" value="2"></Tab>
            <Tab label="Star Rating" value="3" />
          </TabList>
        </Box>
        <TabPanel value="Our Top Pick">
          <PostsCard />
        </TabPanel>
        <TabPanel value="2">Page may later</TabPanel>
        <TabPanel value="3">Page may Later</TabPanel>
      </TabContext>
    </Box>
  );
}
