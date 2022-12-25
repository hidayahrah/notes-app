import React, { useState } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <header>
      <h1>
        <HighlightIcon />
        Daya
        <span className="rightHeader">{time}</span>
      </h1>
    </header>
  );
}

export default Header;
