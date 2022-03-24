import React, { useState, useEffect } from "react";
import Fade from '@mui/material/Fade';

function CustomFade(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return <Fade in={show}>{props.children}</Fade>;
}

export default CustomFade;
