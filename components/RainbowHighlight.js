import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }) => {
  
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(35 * children.length);

  return (
    
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
     <div className="hover:scale-110 hover:bg-blend-color-dodge ">{children}</div>
    </RoughNotation>
    
  );
};
