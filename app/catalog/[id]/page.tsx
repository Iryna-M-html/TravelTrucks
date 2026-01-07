import { fetchCamperById } from "@/lib/api/clientApi";

export default async function CamperDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const camper = await fetchCamperById(params.id);

  return (
    <main>
      <h1>{camper.name}</h1>
    </main>
  );
}
