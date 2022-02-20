import React from "react";
import Management from "./management";
import "../styling/management.css";

function ManagementExps() {
  return (
    <div className="management">
      <h1 className="section-title">Management & Environmentalism</h1>

      {/*Container for compartments of two experiences */}
      <div className="management-container">
        <Management
          title="Founding President @ PlantForever"
          time="Aug 2017 - Present"
          discription="I manage the environmental nonprofit PlantForever, driving the vision to develop urban forests through tree planting to mitigate the climate crisis. I collaborate with a four-person executive team and 10-30 annual volunteers. I have led PlantForever to (in)directly plant 10,000+ trees and raise awareness to over 1.7 million individuals."
          src="images/--"
          alt="--"
          link1="https://www.plantforever.org/"
          link2="https://www.plantforever.org/in-the-news"
          linke2Logo="~fontawesome logo~"
          id="PlantForever"
        />
        <Management />

        <Management
          title="Marketing Executive @ Young Climate Leaders (YCL)"
          time="Feb 2020 - May 2021"
          discription="I led the marketing team at YCL, an organization that hosts environmental conferences. I developed social media, ad, and school-oriented marketing campaigns, capturing 75 attendees. Additionally, I delivered a 40 minute presentation to a 45-person international audience."
          src="images/--"
          alt="--"
          link1="https://www.youngclimateleaders.org/"
          link2="https://www.youngclimateleaders.org/speakers-1?pgid=kxtwryza-023fa57a-babd-4c29-b327-7173bb9aa76b"
          linke2Logo="~fontawesome logo~"
          id="YCL"
        />
        <Management />
      </div>
    </div>
  );
}

export default ManagementExps;
