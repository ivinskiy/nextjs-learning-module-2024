import { Section } from "@/components/Section/Section";
import { Consultant } from "@/types/consultant";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { getConsultantsFromEndpoint } from "../utils/getConsultantsFromEndpoint";

export const UpcomingSection = async () => {
  const token = getCookie("token", { cookies });
  const upcoming = await getConsultantsFromEndpoint(
    "colleagues/upcoming",
    token
  );

  // TO TRY OUT SUSPENSE BOUNDARY
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Section
      profiles={upcoming.map((profile: Consultant) => {
        return {
          netlightId: profile.netlightId,
          name: profile.name.fullName,
          photoUrl: profile.photos?.small,
          role: profile.role,
        };
      })}
    />
  );
};
