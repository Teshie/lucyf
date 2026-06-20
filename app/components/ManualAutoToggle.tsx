"use client";

import React from "react";
import * as Switch from "@radix-ui/react-switch";

interface ManualAutoToggleProps {
  isAuto: boolean;
  onChange: (auto: boolean) => void;
}

const ManualAutoToggle: React.FC<ManualAutoToggleProps> = ({
  isAuto,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-center gap-3 py-1.5 sm:py-2">
      <label
        htmlFor="bingo-mode-switch"
        className={`cursor-pointer select-none text-sm font-semibold transition-colors ${
          !isAuto ? "text-white" : "text-white/45"
        }`}
      >
        Manual
      </label>
      <Switch.Root
        id="bingo-mode-switch"
        checked={isAuto}
        onCheckedChange={onChange}
        className="relative h-[1.625rem] w-[2.875rem] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/30 outline-none transition-colors duration-200 data-[state=checked]:bg-[#16A34A] focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        aria-label="Toggle between manual and auto bingo mode"
      >
        <Switch.Thumb className="block size-[1.375rem] translate-x-0.5 rounded-full bg-white shadow-md transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-[1.375rem]" />
      </Switch.Root>
      <label
        htmlFor="bingo-mode-switch"
        className={`cursor-pointer select-none text-sm font-semibold transition-colors ${
          isAuto ? "text-white" : "text-white/45"
        }`}
      >
        Auto
      </label>
    </div>
  );
};

export default ManualAutoToggle;
