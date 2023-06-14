import Navbar from "../navbar";
import About from "../about";
import Project from "../project";
import Experience from "../experience";
import Management from "../management";
import Footer from "../footer";
import { Paper } from "@mui/material";
import Hero from "../hero";

function Home() {
  return (
    <>
      <Paper elevation={0} sx={{ backgroundColor: "background.main" }}>
        <Navbar />
        <Hero />
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
