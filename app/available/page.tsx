import { Section } from "@/components/Section/Section";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

const getAvailable = async (token?: string) => {
  if (!token) {
    return {
      name: { fullName: undefined },
      photos: { small: undefined },
      role: undefined,
    };
  }
  const response = await fetch(
    "https://api.prd.aws.netlight.com/availability",
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );
  const available = await response.json();

  return available;
};

const AvailablePage = async () => {
  const token = getCookie("token", { cookies });
  const available = await getAvailable(token);
  console.log(available);
  return (
    <div>
      <Section
        profiles={available.map((profile) => {
          return {
            name: profile.name.fullName,
            photoUrl: profile.photos?.small,
            role: profile.role,
          };
        })}
      />
    </div>
  );
};

export default AvailablePage;
