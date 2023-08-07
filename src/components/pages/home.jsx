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

        <Experience
          showHeading={true}
          imageSrc="images/marmik_patel_7shifts.jpg"
          alt="Marmik Patel internship at 7shifts. Software Engineer Intern"
          titleAndCompany="Software Engineer Intern @ 7shifts"
          timeline="May 2023 - Present"
          description="I am developing tip distribution software for restaurant managers. This feature calculates the amount of tips to be given to each employee from a common pool and pays it out. My work enables 269 restaurant locations to successfully pay 3820 restaurant staff."
        />
        <Experience
          titleAndCompany="Software Developer Intern @ Infokidz Academy"
          timeline="May 2022 - August 2022"
          description="I engineered a web application that advertised the company's tutoring services, allowed parents to register students and contact the manager, and provided students with academic worksheets. After I deployed the website, student registration increased by 400%."
        />

        <Project />
        <Project />

        <Management />
        <Footer />
      </Paper>
    </>
  );
}

export default Home;
