import React from "react";

export const ScrollIndicator = () => {
  return (
    <div className="animate-bounce text-linkWater flex flex-col items-center gap-4 text-xs font-medium tracking-2">
      <span className="uppercase vertical select-none">scroll</span>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="106" viewBox="0 0 8 106" fill="none">
          <path
            d="M3.64644 105.354C3.8417 105.549 4.15829 105.549 4.35355 105.354L7.53553 102.172C7.73079 101.976 7.73079 101.66 7.53553 101.464C7.34027 101.269 7.02368 101.269 6.82842 101.464L4 104.293L1.17157 101.464C0.976306 101.269 0.659724 101.269 0.464462 101.464C0.269199 101.66 0.269199 101.976 0.464462 102.172L3.64644 105.354ZM3.5 -2.18557e-08L3.5 105L4.5 105L4.5 2.18557e-08L3.5 -2.18557e-08Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};
