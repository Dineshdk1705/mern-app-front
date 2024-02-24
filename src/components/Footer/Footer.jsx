import React from "react";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div>Movie App</div>
      <div>@{year} | Movie, Inc or its affiliates</div>
    </div>
  );
};

export default Footer;
