import Navbar from "../navbar";
import About from "../about";
import Project from "../project";
import Experience from "../experience";
import Management from "../management";
import Footer from "../footer";
import { Paper } from "@mui/material";

function Home() {
  return (
    <>
      <Paper elevation={0} sx={{ backgroundColor: "background.main" }}>
        <Navbar />
        <About />

        <Experience />
        <Experience />

        <Project />
        <Project />

        <Management />
        <Footer />
      </Paper>
    </>
  );
}

export default Home;
