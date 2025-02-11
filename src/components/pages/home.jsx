import Navbar from "../navbar";
import About from "../about";
import Project from "../project";
import Experience from "../experience";
import Management from "../management";
import Footer from "../footer";
import Hero from "../hero";
import { Paper } from "@mui/material";

function Home() {
  return (
    <>
      <Paper elevation={0} sx={{ backgroundColor: "background.main" }}>
        This site is outdated. Visit the current one here: <a href="https://marmikpatel.com">https://marmikpatel.com</a>
      </Paper>
    </>
  );
}

export default Home;
