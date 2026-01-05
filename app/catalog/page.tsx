"use client";

import CampersList from "@/components/CatalogcampersList/CatalogcampersList";
import type { Camper } from "@/types/camper";
import { fetchCampers } from "@/lib/api/clientApi";
import { useEffect, useState } from "react";

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadCampers() {
      try {
        const data = await fetchCampers();
        setCampers(data);
      } catch (error) {
        console.error("Failed to fetch campers", error);
      } finally {
        setLoading(false);
      }
    }

    loadCampers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <CampersList campers={campers} />
    </main>
  );
}
