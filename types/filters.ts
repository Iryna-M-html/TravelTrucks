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
  label: string;
}
export const EQUIPMENT: EquipmentOptionRecord[] = [
  { option: "AC", icon: EquipmentIcons.AC, label: "AC" },
  { option: "bathroom", icon: EquipmentIcons.bathroom, label: "Bathroom" },
  { option: "kitchen", icon: EquipmentIcons.kitchen, label: "Kitchen" },
  { option: "TV", icon: EquipmentIcons.TV, label: "TV" },
  { option: "radio", icon: EquipmentIcons.radio, label: "Radio" },
  {
    option: "refrigerator",
    icon: EquipmentIcons.refrigerator,
    label: "Refrigerator",
  },
  { option: "microwave", icon: EquipmentIcons.microwave, label: "Microwave" },
  { option: "gas", icon: EquipmentIcons.gas, label: "Gas" },
  { option: "water", icon: EquipmentIcons.water, label: "Water" },
  { option: "automatic", icon: EquipmentIcons.automatic, label: "Automatic" },
];
