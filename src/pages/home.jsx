import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import housings from "../data/housings.json";

function Home() {
  return (
    <div>
      <Banner />
      <div className="cards-container">
        {housings.map((housings) => (
          <Card
            key={housings.id}
            id={housings.id}
            title={housings.title}
            cover={housings.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
