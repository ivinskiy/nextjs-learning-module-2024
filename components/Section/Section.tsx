"use client";
import { FC, useEffect, useState } from "react";
import { Profile, ProfileProps } from "../Profile/Profile";

export const Section: FC<{ profiles: ProfileProps[] }> = ({ profiles }) => {
  const [limitToShow, setLimitToShow] = useState(6);

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col justify-between gap-10 items-center">
      <div className="grid grid-cols-2 gap-5">
        {profiles.slice(0, limitToShow).map((profile) => (
          <Profile {...profile} key={profile.name} />
        ))}
      </div>
      <button
        className="bg-gray-100 rounded-xl w-[140px]"
        onClick={() => setLimitToShow((prev) => prev + 6)}
      >
        Show more
      </button>
    </div>
  );
};
