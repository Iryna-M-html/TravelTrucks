"use client";

import CampersList from "@/components/CatalogcampersList/CatalogcampersList";
import type { Camper, EquipmentKey, FormType } from "@/types/camper";
import { fetchCampers } from "@/lib/api/clientApi";
import { useEffect, useState, useCallback, useRef } from "react";
import SidebarFilters from "@/components/SidebarFilters/SidebarFilters";
import { CamperFilters, FetchCampersParams } from "@/types/filters";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [location, setLocation] = useState("");
  const [activeEquipment, setActiveEquipment] = useState<string[]>([]);
  const [activeType, setActiveType] = useState<string>("");

  const currentFilters = useRef<CamperFilters>({});

  const loadCampers = useCallback(
    async (
      pageNum: number,
      filters: CamperFilters = {},
      isNewSearch: boolean = false
    ) => {
      setLoading(true);
      try {
        const data = await fetchCampers({
          page: pageNum,
          limit: 4,
          filters,
        });

        if (isNewSearch) {
          setCampers(data.items);
        } else {
          setCampers((prev) => [...prev, ...data.items]);
        }

        setTotal(data.total);
      } catch (error) {
        console.error("Failed to fetch campers", error);
        if (isNewSearch) setCampers([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    loadCampers(1, {}, true);
  }, [loadCampers]);

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

    currentFilters.current = filters; // Сохраняем фильтры
    setPage(1); // Сбрасываем страницу
    loadCampers(1, filters, true); // Загружаем заново
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadCampers(nextPage, currentFilters.current, false);
  };

  return (
    <main>
      <div className="container">
        <div className="layoutWrapper">
          <SidebarFilters
            location={location}
            onLocationChange={setLocation}
            activeEquipment={activeEquipment}
            activeType={activeType}
            onEquipmentChange={(id) =>
              setActiveEquipment((prev) =>
                prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
              )
            }
            onTypeChange={setActiveType}
            onSearch={handleSearch}
          />
          <div className="listContainer">
            {loading && page === 1 ? (
              <p className={css.statusMessage}>Loading...</p>
            ) : campers.length > 0 ? (
              <>
                <CampersList campers={campers} />
                {campers.length < total && (
                  <button
                    type="button"
                    className={css.loadMoreBtn}
                    onClick={handleLoadMore}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Load more"}
                  </button>
                )}
              </>
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
