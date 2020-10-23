import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserCircle, faListOl } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({userObj}) => (
  <nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faEdit} color={"#7ed6df"} size="2x" />
        </Link>
      </li>
      <li>
      <Link
          to="/profile"
          style={{
            marginLeft: 10,
            marginRight: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUserCircle} color={"#7ed6df"} size="2x" />
          <span style={{ marginTop: 10 }}>
            {userObj.displayName
              ? `${userObj.displayName}의 Profile`
              : "Profile"}
          </span>
        </Link>
      </li>
      <li>
        <Link to="/ToDo" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faListOl} color={"#7ed6df"} size="2x" />
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
