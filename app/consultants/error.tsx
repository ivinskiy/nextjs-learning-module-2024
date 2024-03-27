"use client";

import { FC } from "react";

const Error: FC<{ error: Error & { digest?: string }; reset: () => void }> = ({
  error,
  reset,
}) => {
  return (
    <div className="flex flex-col gap-10">
      <span>{`ERROR: ${error.message}`}</span>
      <button onClick={reset} className="bg-red-400 rounded-xl">
        RESET
      </button>
    </div>
  );
};
export default Error;
