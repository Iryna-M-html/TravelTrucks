import type { Camper } from "../../types/camper";

import { nextServerApi } from "./api";
import { CamperQueryParams, FetchCampersParams } from "@/types/filters";
export interface FetchCampersResponse {
  campers: Camper[];

  totalPages: number;
}

export const fetchCampers = async ({
  page = 1,
  limit = 4,
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
  console.log("Данные из API:", res.data);
  return res.data.items;
};

// export const fetchNoteById = async (id: string): Promise<Note> => {
//   if (!id) {
//     throw new Error("Note ID is required");
//   }
//   const response = await nextServerApi.get<Note>(`/notes/${id}`);
//   return response.data;
// };
