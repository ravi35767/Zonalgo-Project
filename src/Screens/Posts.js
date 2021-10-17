import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Posts() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: 20 }}>
        <Grid container>
          <Grid item xs={2}>
            <SideMenu />
          </Grid>
          <Grid item xs={10}>
            <Header />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
