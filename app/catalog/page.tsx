"use client";

import CampersList from "@/components/CatalogcampersList/CatalogcampersList";
import type { Camper, EquipmentKey, FormType } from "@/types/camper";
import { fetchCampers } from "@/lib/api/clientApi";
import { useEffect, useState, useCallback } from "react";
import SidebarFilters from "@/components/SidebarFilters/SidebarFilters";
import { CamperFilters, FetchCampersParams } from "@/types/filters";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [activeEquipment, setActiveEquipment] = useState<string[]>([]);
  const [activeType, setActiveType] = useState<string>("");

  const loadCampers = useCallback(
    async (searchParams: FetchCampersParams = {}) => {
      setLoading(true);
      try {
        console.log(
          "location in  loadCampers is: " + searchParams.filters?.location
        );
        const data = await fetchCampers(searchParams);
        setCampers(data);
      } catch (error) {
        console.error("Failed to fetch campers", error);
        setCampers([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    loadCampers();
  }, [loadCampers]);

  const handleEquipmentChange = (id: string) => {
    setActiveEquipment((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleTypeChange = (id: string) => {
    setActiveType(id);
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
  };

  // Запит до бекенду
  const handleSearch = () => {
    const filters: CamperFilters = {
      location: location.trim() || undefined,
      form: (activeType as FormType) || undefined,

      transmission: activeEquipment.includes("transmission")
        ? "automatic"
        : undefined,

      equipment: activeEquipment.filter(
        (item) => item !== "transmission"
      ) as Exclude<EquipmentKey, "automatic">[],
    };

    console.log("Structured filters for TS:", filters);

    loadCampers({ filters });
  };

  return (
    <main>
      <div className="container">
        <div className="layoutWrapper">
          <SidebarFilters
            location={location}
            onLocationChange={handleLocationChange}
            activeEquipment={activeEquipment}
            activeType={activeType}
            onEquipmentChange={handleEquipmentChange}
            onTypeChange={handleTypeChange}
            onSearch={handleSearch}
          />
          <div className="listContainer">
            {loading ? (
              <p className={css.statusMessage}>Loading...</p>
            ) : campers.length > 0 ? (
              <CampersList campers={campers} />
            ) : (
              <div className={css.noResults}>
                <p className={css.noResultsText}>
                  No campers found in this location or with these filters.
                </p>
                <p className={css.noResultsSubtext}>
                  Try adjusting your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
