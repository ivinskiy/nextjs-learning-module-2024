import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export type ProfileProps = {
  netlightId: string;
  name: string;
  photoUrl?: string;
  role: string;
};

export const Profile: FC<ProfileProps> = ({
  name,
  photoUrl,
  role,
  netlightId,
}) => {
  return (
    <Link href={`/consultants/${netlightId}`}>
      <Image
        src={photoUrl ?? "/"}
        alt={name}
        width={96}
        height={96}
        className="rounded-xl"
      />
      <p>{name}</p>
      <p>{role}</p>
    </Link>
  );
};
