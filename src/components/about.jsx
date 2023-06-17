import { Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

function About() {
  return (
    <Container
      id="About Me"
      fixed
      maxWidth="md"
      sx={{
        bgcolor: "background.main",
        height: "60vh",
        width: "90%",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.main",
          display: "flex",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <img
          src={"images/marmik_patel.jpg"}
          alt="Marmik Patel"
          style={{
            borderRadius: "50%",
            border: "solid",
            borderWidth: "3px",
            borderColor: "#bde8f1",
            maxWidth: "300px",
            marginRight: "4%",
            marginBottom: "4%",
          }}
        />

        <Box
          sx={{
            bgcolor: "background.main",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            textAlign="left"
            sx={{
              color: "dark.main",
              textTransform: "none",
              fontSize: "h4.fontSize",
              fontWeight: "bold",
            }}
          >
            Hello!
          </Typography>

          <Typography
            textAlign="left"
            sx={{
              color: "dark.main",
              textTransform: "none",
              fontSize: "h7.fontSize",
            }}
          >
            I recently completed my <b>third year of Computer Science</b> at the
            University of Saskatchewan (one more year left!). I'm currently
            doing a 12-month internship at 7shifts as a{" "}
            <b>Software Engineer Intern</b>, building innovative
            restaurant-management software. Last summer, I also did a Software
            Development internship. <br />
            <br />
            Outside of work, I manage PlantForever, a Canadian tree-planting
            nonprofit!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
