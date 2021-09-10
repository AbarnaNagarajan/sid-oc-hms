import { useState } from "react";
import "./../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faUserMd,
  faMapMarkerAlt,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router";

function MainLayout() {
  const [redirection, setRedirection] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <FontAwesomeIcon icon={faHospital} fixedWidth /> Siddharth Ortho Care
        </p>
        <p>
          <FontAwesomeIcon icon={faUserMd} fixedWidth /> Dr. R. Anand
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth /> Ramanathapuram
        </p>
        <p>
          <FontAwesomeIcon
            icon={faHandPointRight}
            size={"2x"}
            fixedWidth
            onClick={() => setRedirection(true)}
          />
          {redirection ? <Redirect from="/main" to="/login" /> : null}
        </p>
      </header>
    </div>
  );
}

export default MainLayout;
