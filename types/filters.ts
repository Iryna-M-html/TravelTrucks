import { EquipmentKey } from "./camper";
export interface CamperFilters {
  location?: string;
  form?: CamperForm;
  equipment?: Exclude<EquipmentKey, "automatic">[];
  transmission?: "automatic";
}
export type CamperForm = "panelTruck" | "fullyIntegrated" | "alcove";

export interface FetchCampersParams {
  page?: number;
  limit?: number;
  filters?: CamperFilters;
}
export interface CamperQueryParams {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;

  AC?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  bathroom?: boolean;
  transmission?: "automatic";
}
export type EquipmentOption =
  | "AC"
  | "bathroom"
  | "kitchen"
  | "TV"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water"
  | "automatic";

export const EquipmentIcons: Record<EquipmentOption, string> = {
  AC: "icon-ac",
  bathroom: "icon-bathroom",
  kitchen: "icon-kitchen",
  TV: "icon-tv",
  radio: "icon-radio",
  refrigerator: "icon-refrigerator",
  microwave: "icon-microwave",
  gas: "icon-gas",
  water: "icon-water",
  automatic: "icon-automatic",
};
export interface EquipmentOptionRecord {
  option: EquipmentOption;
  icon: string;
}
export const EQUIPMENT: EquipmentOptionRecord[] = [
  { option: "AC", icon: EquipmentIcons.AC },
  { option: "bathroom", icon: EquipmentIcons.bathroom },
  { option: "kitchen", icon: EquipmentIcons.kitchen },
  { option: "TV", icon: EquipmentIcons.TV },
  { option: "radio", icon: EquipmentIcons.radio },
  { option: "refrigerator", icon: EquipmentIcons.refrigerator },
  { option: "microwave", icon: EquipmentIcons.microwave },
  { option: "gas", icon: EquipmentIcons.gas },
  { option: "water", icon: EquipmentIcons.water },
  { option: "automatic", icon: EquipmentIcons.automatic },
];
