import {
  BottomNavigation,
  BottomNavigationAction,
  Chip,
  Typography,
  Link,
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
      <BottomNavigationAction
        icon={
          <Typography
            textAlign="left"
            sx={{
              color: "dark.main",
              textTransform: "none",
              fontSize: "h7.fontSize",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <Link
              href="https://github.com/marmikpatel19/marmikpatel19.github.io"
              color="inherit"
            >
              Made by Marmik Patel © 2023
            </Link>
          </Typography>
        }
      />

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
              color: "dark.main",
              borderRadius: "10%",
              fontWeight: "bold",
              minHeight: {
                xs: "23px",
                sm: "32px",
              },
            }}
          />
        }
      />
      <BottomNavigationAction
        icon={
          <Link href="https://github.com/marmikpatel19" color="inherit">
            <GitHubIcon
              sx={{
                color: "dark.main",
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
        icon={
          <Link href="https://linkedin.com/in/marmikp" color="inherit">
            <LinkedInIcon
              sx={{
                color: "dark.main",
                marginRight: "5px",
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
