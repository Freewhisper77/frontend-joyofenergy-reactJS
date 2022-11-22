import React, { useState } from "react";

function Button({ content, clicked }) {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(true);
    clicked();
  }

  return (
    <>
      <button
        type="button"
        className={`
          h5 
          inline-block 
          shadow-2 
          pl2 
          pr2 
          pt1 
          pb1 
          roundedMore 
          border-grey 
          bold
          mr2
          ${state ? "button-unClick" : "button"}
          `}
        onClick={handleClick}
      >
        {content}
      </button>
    </>
  );
}

export default Button;
