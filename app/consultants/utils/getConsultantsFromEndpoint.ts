import { mockConsultant } from "@/mock/mockConsultant";
import { Consultant } from "@/types/consultant";

export const getConsultantsFromEndpoint = async (
  endpoint: string,
  token?: string
): Promise<Consultant[]> => {
  if (!token) {
    return [mockConsultant];
  }
  const response = await fetch(`https://api.prd.aws.netlight.com/${endpoint}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  const available = await response.json();

  return available;
};