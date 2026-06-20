"use client";

import React from "react";

interface ManualAutoToggleProps {
  isAuto: boolean;
  onChange: (auto: boolean) => void;
}

const ManualAutoToggle: React.FC<ManualAutoToggleProps> = ({
  isAuto,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-center gap-2.5 py-1 sm:py-1.5">
      <span
        className={`text-xs font-semibold sm:text-sm ${
          !isAuto ? "text-white" : "text-white/40"
        }`}
      >
        Manual
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isAuto}
        aria-label={isAuto ? "Auto claim enabled" : "Manual claim enabled"}
        onClick={() => onChange(!isAuto)}
        className={`relative h-7 w-[3.25rem] shrink-0 rounded-full transition-colors duration-200 ${
          isAuto ? "bg-[#16A34A]" : "bg-white/25"
        }`}
      >
        <span
          className={`absolute top-0.5 size-6 rounded-full bg-white shadow transition-transform duration-200 ${
            isAuto ? "translate-x-[calc(3.25rem-1.625rem)]" : "translate-x-0.5"
          }`}
        />
      </button>
      <span
        className={`text-xs font-semibold sm:text-sm ${
          isAuto ? "text-white" : "text-white/40"
        }`}
      >
        Auto
      </span>
    </div>
  );
};

export default ManualAutoToggle;
