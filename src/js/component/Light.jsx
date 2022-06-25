import React from "react";
import { useState } from "react";

export const Light = () => {
  
    let [active, setActive] = useState({
    red: "red-light",
    yellow: "yellow-light",
    green: "green-light"
  });


  return (
    <div>
      <div id="lighttop"></div>
      <div id="lightcontainer">
        <div
          className={active.red}
          onClick={() =>
            setActive({
              red: "red-light-selected",
              yellow: "yellow-light",
              green: "green-light"
            })
          }
        ></div>
        <div
          className={active.yellow}
          onClick={() =>
            setActive({
              red: "red-light",
              yellow: "yellow-light-selected",
              green: "green-light"
            })
          }
        ></div>
        <div
          className={active.green}
          onClick={() =>
            setActive({
              red: "red-light",
              yellow: "yellow-light",
              green: "green-light-selected"
            })
          }
        ></div>
      </div>
    </div>
  );
};

export default Light;
