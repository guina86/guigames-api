/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a
          key="email"
          href="mailto:guina86@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leandro Guina
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
