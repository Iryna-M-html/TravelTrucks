import type { Camper } from "../../types/camper";

import { nextServerApi } from "./api";
import { CamperQueryParams, FetchCampersParams } from "@/types/filters";
export interface FetchCampersResponse {
  campers: Camper[];

  totalPages: number;
}

export const fetchCampers = async ({
  page,
  limit,
  filters,
}: FetchCampersParams = {}): Promise<Camper[]> => {
  const params: CamperQueryParams = { page, limit };

  if (filters?.location) params.location = filters.location;
  if (filters?.form) params.form = filters.form;
  if (filters?.transmission) params.transmission = filters.transmission;

  if (filters?.equipment?.length) {
    filters.equipment.forEach((key) => {
      params[key] = true;
    });
  }

  const res = await nextServerApi.get("/campers", { params });

  return res.data.items;
};

export const fetchCamperById = async (id: string): Promise<Camper> => {
  if (!id) {
    throw new Error("Camper ID is required");
  }
  const response = await nextServerApi.get<Camper>(`/campers/${id}`);
  return response.data;
};
