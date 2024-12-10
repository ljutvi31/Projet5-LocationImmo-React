import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";

function Home() {
  return (
    <div>
      <Banner />
      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
