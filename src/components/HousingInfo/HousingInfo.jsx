function HousingInfo({ title, location, tags }) {
  return (
    <div className="housing__info">
      <h1>{title}</h1>
      <p className="housing__location">{location}</p>
      <div className="housing__tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HousingInfo;
