import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

function Experience(props) {
  return (
    <Container
      id="Experience"
      fixed
      maxWidth="md"
      sx={{
        bgcolor: "background.main",
        height: "60vh",
        width: "90%",
        marginBottom: "-7%",
      }}
    >
      {props.showHeading && (
        <Typography
          textAlign="left"
          sx={{
            color: "dark.main",
            textTransform: "none",
            fontSize: {
              xs: "h5.fontSize",
              sm: "h4.fontSize",
            },
            fontWeight: "bold",
          }}
        >
          Experience
        </Typography>
      )}
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
              fontSize: {
                xs: "h7.fontSize",
                sm: "h6.fontSize",
              },
              fontWeight: "bold",
            }}
          >
            {props.titleAndCompany}
          </Typography>

          <Typography
            textAlign="left"
            sx={{
              color: "dark.main",
              textTransform: "none",
              fontSize: "h7.fontSize",
              marginTop: "5px",
              marginBottom: "10px",
            }}
          >
            {props.timeline}
          </Typography>

          <Typography
            textAlign="left"
            sx={{
              color: "dark.main",
              textTransform: "none",
              fontSize: "h7.fontSize",
            }}
          >
            {props.description}
          </Typography>
        </Box>

        {props.imageSrc != null && (
          <img
            src={props.imageSrc}
            alt={props.alt}
            style={{
              borderRadius: "10%",
              border: "solid",
              borderWidth: "3px",
              borderColor: "#bde8f1",
              maxWidth: "240px",
              marginBottom: "4%",
            }}
          />
        )}
      </Box>
    </Container>
  );
}

export default Experience;
