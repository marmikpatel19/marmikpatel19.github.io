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
        bottom: "0px",
      }}
    >
      <BottomNavigationAction
        icon={
          <Typography
            textAlign="left"
            sx={{
              color: "dark.main",
              textTransform: "none",
              fontSize: {
                xs: "10px",
                sm: "15px",
              },
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <Link
              target="__blank"
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
            target="__blank"
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
        sx={{
          marginLeft: "-20px",
        }}
      />
      <BottomNavigationAction
        icon={
          <Link
            target="__blank"
            href="https://github.com/marmikpatel19"
            color="inherit"
          >
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
        sx={{
          marginLeft: {
            xs: "-40px",
            sm: "-80px",
          },
        }}
      />
      <BottomNavigationAction
        icon={
          <Link
            target="__blank"
            href="https://linkedin.com/in/marmikp"
            color="inherit"
          >
            <LinkedInIcon
              sx={{
                color: "dark.main",
                fontSize: {
                  xs: "30px",
                  sm: "40px",
                },
              }}
            />
          </Link>
        }
        sx={{
          marginLeft: {
            xs: "-60px",
            sm: "-80px",
          },
        }}
      />
    </BottomNavigation>
  );
}

export default Footer;
