import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Rodape() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#18662C", padding: "15px", marginTop: "1rem" }}
    >
      <Grid item>
        <IconButton color="neutral" href="/">
          <HomeIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="neutral" href="/sobre">
          <InfoIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="neutral" href="https://www.instagram.com/juniobrennon">
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          color="neutral"
          href="https://www.linkedin.com/in/brennon-junio-ab1139146/"
        >
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="neutral" href="https://github.com/brennonjunio">
          <GitHubIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          color="neutral"
          href="https://api.whatsapp.com/send/?phone=5592985535254&text&type=phone_number&app_absent=0"
        >
          <WhatsAppIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Rodape;
