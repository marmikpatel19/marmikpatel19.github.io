import { Typography } from "@mui/material";
import { Container } from "@mui/system";

function Hero() {
  return (
    <Container
      fixed
      sx={{
        bgcolor: "background.main",
        marginTop: {
          xs: "25%",
          sm: "15%",
          md: "10%",
        },
        height: "60vh",
        width: {
          xs: "248px",
          sm: "428px",
        },
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          color: "dark.main",
          textTransform: "none",
          fontSize: {
            xs: "h4.fontSize",
            sm: "h2.fontSize",
          },
          fontWeight: "bold",
        }}
      >
        Marmik Patel
      </Typography>
      <Typography
        textAlign="right"
        sx={{
          color: "dark.main",
          textTransform: "none",
          fontSize: {
            xs: "h7.fontSize",
            sm: "h6.fontSize",
          },
          fontWeight: "bold",
        }}
      >
        Computer Science student
      </Typography>
    </Container>
  );
}

export default Hero;
