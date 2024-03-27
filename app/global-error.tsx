"use client";

import { FC } from "react";

const GlobalError: FC<{
  error: Error & { digest?: string };
  reset: () => void;
}> = ({ error, reset }) => {
  return (
    <div className="flex flex-col gap-10">
      <span>{`GLOBAL ERROR: ${error.message}`}</span>
      <button onClick={reset} className="bg-red-400 rounded-xl">
        RESET
      </button>
    </div>
  );
};
export default GlobalError;
