import React, { useState } from "react";
import "./Tooltip.css"; // Import CSS file for styling

const Tooltip = ({ children, content, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {visible && <div className={`tooltip-box ${position}`}>{content}</div>}
      {children}
    </div>
  );
};

export default Tooltip;
