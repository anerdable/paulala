import React from "react";

export const Header = (props) => {
  return (
    // <!-- Top navigation -->
    <div className="top-nav">
      {/* <!-- Left-aligned links (default) --> */}
      <a href="http://localhost:3000/">home</a>
      <a href="http://localhost:3000/about">about</a>

      {/* <!-- Right-aligned links --> */}
      <div className="top-nav-right">
        <a href="https://www.linkedin.com/in/pauladcruz/">linkedin</a>
        <a href="https://github.com/anerdable?tab=repositories">GitHub</a>
      </div>
    </div>
  );
};

export default Header;
