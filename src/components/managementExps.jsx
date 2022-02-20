import React from "react";
import Management from "./management";
import "../styling/management.css";

function ManagementExps() {
  return (
    <div className="management-experiences">
      <h1 className="section-title">Management & Environmentalism</h1>

      {/*Container for compartments of two experiences */}
      <div className="management-container">
        <Management
          title="Founding President @ PlantForever"
          time="Aug 2017 - Present"
          discription="I manage the nonprofit PlantForever, driving the vision to develop urban forests. I collaborate with a four-person team and 10-30 volunteers, leading PlantForever to (in)directly plant 10,000+ trees and engage 1,700,000+ individuals. "
          src="images/PlantForever-One.jpg"
          alt="Image of Marmik's PlantForever management experience"
          link1="https://www.plantforever.org/"
          link2="https://www.plantforever.org/in-the-news"
          link2LogoIndex="0"
          id="PlantForever"
        />

        <Management
          title="Marketing Executive @ Young Climate Leaders"
          time="Feb 2020 - May 2021"
          discription="I led the marketing team at YCL, an organization that hosts climate conferences. Developing various marketing campaigns, I captured 75 attendees. Additionally, I delivered a presentation to a 45-person audience."
          src="images/YCL-One.png"
          alt="Image of Marmik's Young Climate Leaders management experience"
          link1="https://www.youngclimateleaders.org/"
          link2="https://www.youngclimateleaders.org/speakers-1?pgid=kxtwryza-023fa57a-babd-4c29-b327-7173bb9aa76b"
          link2LogoIndex="1"
          id="YCL"
        />
      </div>
    </div>
  );
}

export default ManagementExps;
