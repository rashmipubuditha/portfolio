import Service from "../components/Service";
import { myServices } from "../data";
import SectionTitle from "../components/SectionTitle";

const Certificates = () => {
  // useObserver();
  return (
    <section className="services">
      <div className="container">
        <SectionTitle
          title="Certificates"
          des="My certificates and what I have achieved!"
        />
        <div className="row">
          {myServices.map((obj, idx) => (
            <div
              key={idx}
              className="col-lg-6 col-md-12 mb-4"
              style={{
                padding: "0.5rem 1rem",
              }}
            >
              <div
                style={{
                  background: "#888",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  padding: "1.5rem",
                  minHeight: "120px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#7b0447ff",
                    minWidth: "40px",
                  }}
                >
                  <i className={obj.iconName}></i>
                </div>
                <div>
                  <h5
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      color: "#222",
                    }}
                  >
                    {obj.service}
                  </h5>
                  {obj.description && (
                    <ul style={{ paddingLeft: "1.2rem", marginBottom: 0 }}>
                      {obj.description.split("\n").map((desc, i) => (
                        <li
                          key={i}
                          style={{ color: "#1e1e1eff", fontSize: "0.98rem" }}
                        >
                          {desc.replace(/^•\s*/, "")}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certificates;
