import { NextRequest } from "next/server";
import { Consultant } from "@/types/consultant";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  const netlightId = params.id;
  const response = await fetch(
    `https://api.prd.aws.netlight.com/colleagues/${netlightId}`,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );
  const data: Consultant = await response.json();

  return Response.json(data);
}
