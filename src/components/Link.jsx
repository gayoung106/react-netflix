import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ to, children, ...rest }) => {
  return (
    <RouterLink to={to} {...rest}>
      <button className="text-white/80 pr-4 text-sm">{children}</button>
    </RouterLink>
  );
};

export default Link;
