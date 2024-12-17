function HousingHost({ host, rating }) {
  return (
    <div className="housing__host">
      <div className="host">
        <p className="host__name">{host.name}</p>
        <img
          src={host.picture}
          alt={`Portrait de ${host.name}`}
          className="host__picture"
        />
      </div>
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? "star--active" : ""}`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
