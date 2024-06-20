import { Tab, Tabs } from "react-bootstrap";
import CivilEngineering from "./Projects/CivilEngineering";
import TopographySurvey from "./Projects/TopographySurvey";

const Projects = () => {
  return (
    <div className="container">
      <Tabs defaultActiveKey="civil-engineering" id="uncontrolled-tab-example">
        <Tab eventKey="civil-engineering" title="Civil Engineering">
          <div className="pt-3">
            <CivilEngineering />
          </div>
        </Tab>
        <Tab eventKey="topography-survey" title="Topography Survey">
          <div className="pt-3">
            <TopographySurvey />
          </div>{" "}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
