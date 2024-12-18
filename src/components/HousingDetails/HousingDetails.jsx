import Collapse from "../Collapse";

function HousingDetails({ description, equipments }) {
  return (
    <div className="housing__details">
      <div className="housing__collapse">
        <Collapse title="Description" content={description} />
      </div>
      <div className="housing__collapse">
        <Collapse
          title="Équipements"
          content={
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default HousingDetails;
