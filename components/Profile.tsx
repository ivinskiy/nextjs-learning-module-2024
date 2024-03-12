import Image from "next/image";
import { FC } from "react";

export const Profile: FC<{ name: string; photoUrl: string; role: string }> = ({
  name,
  photoUrl,
  role,
}) => {
  return (
    <div>
      <Image src={photoUrl} alt={name} width={96} height={96} />
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};
