import React from "react";

const Helmet = (props) => {
  document.title = "Sunbeam HMS - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
