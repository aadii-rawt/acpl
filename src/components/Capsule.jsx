const Capsule = ({ title }) => {
  return (
    <span className="shiny-capsule">
      <span className="shiny-border">
        <span className="shiny-glow"></span>
      </span>

      <span className="relative z-10">{title}</span>
    </span>
  );
};

export default Capsule;

