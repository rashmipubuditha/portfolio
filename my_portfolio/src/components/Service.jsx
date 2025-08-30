import { useInView } from "react-intersection-observer";

const Service = ({ service, iconName, description }) => {
  const { ref: iconRef, inView: animate } = useInView();

  return (
    <div className={`col-lg-4 col-md-6 service ${animate ? "animate" : ""}`}>
      <div className="icon-wrap">
        <div className="icon" ref={iconRef}>
          <div className="face front">
            <i className={iconName}></i>
          </div>
          <div className="face back">
            <i className={iconName}></i>
          </div>
        </div>
      </div>
      <h4>{service}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Service;
