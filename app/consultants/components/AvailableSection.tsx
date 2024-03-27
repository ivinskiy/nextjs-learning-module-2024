import { Section } from "@/components/Section/Section";
import { Consultant } from "@/types/consultant";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { getConsultantsFromEndpoint } from "../utils/getConsultantsFromEndpoint";

export const AvailableSection = async () => {
  const token = getCookie("token", { cookies });
  const available = await getConsultantsFromEndpoint("availability", token);

  // TO TRY OUT SUSPENSE BOUNDARY
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Section
      profiles={available.map((profile: Consultant) => {
        return {
          name: profile.name.fullName,
          photoUrl: profile.photos?.small,
          role: profile.role,
        };
      })}
    />
  );
};
