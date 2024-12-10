import { Popper } from "@mui/material";
import React, { useEffect, useState } from "react";

const WOComboPopper = (props) => {
  // logic
  console.log("props", props);

  const initialStyle = {
    transform: "translate3d(0px,0px,0px)",
  };

  const [style, setStyle] = useState(initialStyle);

  useEffect(() => {
    console.log("props.anchorEl", props.anchorEl);
    const autoCompleteInput = props.anchorEl;

    const scrollY = window.scrollY;
    const top = autoCompleteInput.getBoundingClientRect().top + scrollY;
    const left = autoCompleteInput.getBoundingClientRect().left + scrollY;
    const width = autoCompleteInput.clientWidth;
    const height = autoCompleteInput.clientHeight;
    console.log("top", top);
    console.log("left", left);
    console.log("height", top + height);
    setStyle({
      width,
      position: "fixed",
      transform: `translate3d(${left}px, ${top + height}px, 0px)`,
    });
  }, [props]);

  // view
  // return <Popper {...props} style={{ width: 250 }} placement="bottom-start" />;
  return <Popper {...props} style={style} placement="bottom-start" />;
};

export default WOComboPopper;
