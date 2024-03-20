"use client";
import { FC, useEffect, useState } from "react";
import { Profile, ProfileProps } from "../Profile/Profile";

export const Section: FC<{ profiles: ProfileProps[] }> = ({ profiles }) => {
  const [limitToShow, setLimitToShow] = useState(6);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {profiles.map((profile) => (
          <Profile {...profile} key={profile.name} />
        ))}
      </div>
      <button className="" onClick={() => setLimitToShow((prev) => prev + 6)}>
        Show more
      </button>
    </div>
  );
};
