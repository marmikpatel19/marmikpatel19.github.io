import { Box, Chip, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
        height: {
          xs: "40vh",
          sm: "77vh",
        },
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          marginTop: "2%",
        }}
      >
        <Link
          target="__blank"
          href="https://github.com/marmikpatel19"
          color="inherit"
        >
          <GitHubIcon
            sx={{
              marginTop: "-5px",
              fontSize: {
                xs: "27px",
                sm: "36px",
              },
            }}
          />
        </Link>
        <Link
          target="__blank"
          href="https://linkedin.com/in/marmikp"
          color="inherit"
        >
          <LinkedInIcon
            sx={{
              marginRight: "5px",
              marginTop: "-5px",
              fontSize: {
                xs: "30px",
                sm: "40px",
              },
            }}
          />
        </Link>
        <Chip
          label="Resume"
          variant="outlined"
          component="a"
          href="https://marmikpatel19.github.io/MarmikPatelResume.pdf"
          target="__blank"
          clickable
          sx={{
            borderRadius: "10%",
            marginRight: "7px",
            fontWeight: "bold",
            height: {
              xs: "23px",
              sm: "32px",
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default Hero;
