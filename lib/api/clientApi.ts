import type { Camper } from "../../types/camper";
// import { User, RegisterRequest, LoginRequest, EditRequest } from "@/types/user";
import { nextServerApi } from "./api";
import { CamperQueryParams, FetchCampersParams } from "@/types/filters";
export interface FetchCampersResponse {
  campers: Camper[];

  totalPages: number;
}

// interface FetchNotesParams {
//   page?: number;
//   search?: string;
//   perPage?: number;
// }

// export interface NewNotePayload {
//   title: string;
//   content: string;
//   tag: NoteTag;
// }
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

  return res.data.items;
};

// export const fetchNoteById = async (id: string): Promise<Note> => {
//   if (!id) {
//     throw new Error("Note ID is required");
//   }
//   const response = await nextServerApi.get<Note>(`/notes/${id}`);
//   return response.data;
// };

// export const getSingleNote = fetchNoteById;

// export const createNote = async (noteData: NewNotePayload): Promise<Note> => {
//   const response = await nextServerApi.post<Note>("/notes", noteData);
//   return response.data;
// };

// export const deleteNote = async (id: string): Promise<Note> => {
//   if (!id) {
//     throw new Error("Note ID is required for deletion");
//   }
//   const response = await nextServerApi.delete<Note>(`/notes/${id}`);
//   return response.data;
// };

// export interface RegisterRequest {
//   email: string;
//   password: string;
//   //username: string;
// }
// export const register = async (body: RegisterRequest) => {
//   const { data } = await nextServerApi.post<User>(`/auth/register`, body);
//   return data;
// };

// export interface LoginRequest {
//   email: string;
//   password: string;
// }
// export const login = async (body: LoginRequest) => {
//   const { data } = await nextServerApi.post<User>(`/auth/login`, body);
//   return data;
// };

// export interface EditRequest {
//   // email: string;
//   username: string;
// }
// export const editUser = async (body: EditRequest) => {
//   const { data } = await nextServerApi.patch<User>(`/users/me`, body);
//   return data;
// };

// export const checkSession = async (): Promise<SessionResponse> => {
//   const { data } = await nextServerApi.get<SessionResponse>(`/auth/session`);
//   return data;
// };

// export const getMe = async () => {
//   const { data } = await nextServerApi.get<User>(`/users/me`);
//   return data;
// };

// export const logOut = async () => {
//   await nextServerApi.post(`/auth/logout`);
// };
