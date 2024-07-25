import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Skill({ label, icon, iconId }) {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => {
    setIsHover(true);
  };

  const onLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="skill d-flex flex-column justify-content-center align-items-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="button"
    >
      {isHover ? (
        <p className="skill-text">{label}</p>
      ) : (
        <FontAwesomeIcon
          id={iconId}
          className="skill-icon"
          icon={icon}
          size="4x"
        />
      )}
    </div>
  );
}

export default Skill;
