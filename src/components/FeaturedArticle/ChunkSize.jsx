import React, { useState, useEffect } from "react";

import { breakpoints } from "../../utils/Breakpoints.jsx";

const ChunkSize = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    const viewportWidthHandler = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", viewportWidthHandler);

    return () => {
      window.removeEventListener("resize", viewportWidthHandler);
    };
  }, [breakpoints, currentWidth, setCurrentWidth]);

  useEffect(() => {
    const isMobile = breakpoints.sm >= currentWidth;
    const isTablet = breakpoints.md >= currentWidth;

    if (isMobile) {
      setChunkSize(1);
    } else if (isTablet) {
      setChunkSize(2);
    } else {
      setChunkSize(3);
    }
    return () => {};
  }, [breakpoints, currentWidth, setCurrentWidth]);

  return chunkSize;
};

export default ChunkSize;
