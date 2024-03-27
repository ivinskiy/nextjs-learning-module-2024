import Image from "next/image";
import { FC } from "react";

export type ProfileProps = {
  name: string;
  photoUrl?: string;
  role: string;
};

export const Profile: FC<ProfileProps> = ({ name, photoUrl, role }) => {
  return (
    <div>
      <Image
        src={photoUrl ?? "/"}
        alt={name}
        width={96}
        height={96}
        className="rounded-xl"
      />
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};
