import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { Profile } from "@/components/Profile/Profile";
import { getConsultantFromEndpoint } from "../utils/getConsultantFromEndpoint";

const ConsultantPage = async ({ params }: { params: { id: string } }) => {
  const netlightId = params.id;
  const token = getCookie("token", { cookies });
  const data = await fetch(
    `http://localhost:3000/consultants/${netlightId}/api?token=${token}`
  );
  const consultant = await data.json();

  return (
    <Profile
      name={consultant.name.fullName}
      netlightId={consultant.netlightId}
      role={consultant.role}
      photoUrl={consultant.photos?.medium}
    />
  );
};

export default ConsultantPage;
