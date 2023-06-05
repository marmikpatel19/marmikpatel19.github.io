import "../../App.css";
import Navbar from "../navbar";
import About from "../about";
import Project from "../project";
import Experience from "../experience";
import Management from "../management";
import Footer from "../footer";

function Home() {
  return (
    <>
      <Navbar />
      <About />

      <Experience />
      <Experience />

      <Project />
      <Project />

      <Management />
      <Footer />
    </>
  );
}

export default Home;
