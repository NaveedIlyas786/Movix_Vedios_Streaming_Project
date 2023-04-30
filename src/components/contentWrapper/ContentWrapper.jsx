import React from "react";

import "./contentWrapperStyle.scss";

const ContentWrapper = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
