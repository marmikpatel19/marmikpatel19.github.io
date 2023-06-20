import {
  BottomNavigation,
  BottomNavigationAction,
  Chip,
  Typography,
  Link,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "background.main",
        borderTop: "3px solid #0d0d0d",
      }}
    >
      <Typography
        textAlign="left"
        sx={{
          color: "primary.main",
          textTransform: "none",
          fontSize: "h7.fontSize",
          fontWeight: "bold",
        }}
      >
        <Link
          href="https://github.com/marmikpatel19/marmikpatel19.github.io"
          color="inherit"
        >
          Made by Marmik Patel © 2023
        </Link>
      </Typography>
      <BottomNavigationAction
        label="Nearby"
        icon={
          <Chip
            label="Resume"
            variant="outlined"
            component="a"
            href="https://marmikpatel19.github.io/MarmikPatelResume.pdf"
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
        }
      />
      <BottomNavigationAction
        label="Recents"
        icon={
          <Link href="https://github.com/marmikpatel19" color="inherit">
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
        }
      />
      <BottomNavigationAction
        label="Favorites"
        icon={
          <Link href="https://linkedin.com/in/marmikp" color="inherit">
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
        }
      />
    </BottomNavigation>
  );
}

export default Footer;
