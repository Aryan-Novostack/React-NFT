import React from 'react';

const ScrollComponent = () => {
  return (
    <div data-scroll="[data-scroll-item]" className="overflow-hidden">
      <div data-scroll-cog="" className="hidden">
        {{
          "scrollTrigger": {
            "trigger": "[data-scroll-item]"
          }
        }}
      </div>
    </div>
  );
};

export default ScrollComponent;