import { useState } from "react";
import { XBlock, XMasonry } from "react-xmasonry";
import { projectsData } from "./projectsData";
import SingleIsotope from "./SingleIsotope";

export default function IsotopeSection() {
  const [projects, setProjects] = useState(projectsData);
  const handleFilterKeyChange = (key) => () => {
    const filteredItems = projectsData.filter((item) => {
      if (key === "*") return item;

      if (key === item.filterValue) return item;
    });

    setProjects(filteredItems);
  };

  return (
    <section className="portfolio-showcase-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 text-center mb-4">
            <div className="portfolio-cat-filter">
              <button onClick={handleFilterKeyChange("*")} className="active">
                All Works
              </button>
              <button onClick={handleFilterKeyChange("development")}>
                Web Development
              </button>
              <button onClick={handleFilterKeyChange("maintenance")}>
                Web Maintenance
              </button>
              <button onClick={handleFilterKeyChange("ecommerce")}>
                Ecommerce Store
              </button>
              <button onClick={handleFilterKeyChange("api")}>
                API Integration
              </button>
              <button onClick={handleFilterKeyChange("landing")}>
                Landing Pages Building
              </button>
              <button onClick={handleFilterKeyChange("optimization")}>
                Performance Optimization
              </button>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-sm-12">
            <XMasonry center={false} maxColumns={3} targetBlockWidth={400}>
              {projects.map((item) => (
                <XBlock key={item.id}>
                  <SingleIsotope item={item} />
                </XBlock>
              ))}
            </XMasonry>
          </div>
        </div>
      </div>
    </section>
  );
}
