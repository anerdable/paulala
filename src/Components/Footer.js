import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>{new Date().getFullYear()} Copyright @ All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
