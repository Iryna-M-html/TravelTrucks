import css from "./SidebarFilters.module.css";

interface SidebarFiltersProps {
  location: string;
  onLocationChange: (value: string) => void;
  activeEquipment: string[];
  activeType: string;
  onEquipmentChange: (id: string) => void;
  onTypeChange: (id: string) => void;
  onSearch: () => void;
}

const SidebarFilters = ({
  location,
  onLocationChange,
  activeEquipment,
  activeType,
  onEquipmentChange,
  onTypeChange,
  onSearch,
}: SidebarFiltersProps) => {
  const equipment = [
    { id: "AC", label: "AC", icon: "icon-ac" },
    { id: "transmission", label: "Automatic", icon: "icon-automatic" },
    { id: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
    { id: "TV", label: "TV", icon: "icon-tv" },
    { id: "bathroom", label: "Bathroom", icon: "icon-bathroom" },
  ];

  const vehicleTypes = [
    { id: "panelTruck", label: "Van", icon: "icon-panelTruck" },
    {
      id: "fullyIntegrated",
      label: "Fully Integrated",
      icon: "icon-fullyIntegrated",
    },
    { id: "alcove", label: "Alcove", icon: "icon-alcove" },
  ];

  return (
    <aside className={css.sidebar}>
      {/* Локація */}
      <div className={css.locationGroup}>
        <label className={css.label}>Location</label>
        <div className={css.inputWrapper}>
          <svg className={css.inputIcon} width="20" height="20">
            <use href="/img/icons.svg#icon-map"></use>
          </svg>
          <input
            type="text"
            placeholder="Kyiv, Ukraine"
            className={css.locationInput}
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
          />
        </div>
      </div>

      <p className={css.filtersTitle}>Filters</p>

      {/* Vehicle Equipment */}
      <div className={css.filterGroup}>
        <h3 className={css.groupTitle}>Vehicle equipment</h3>
        <hr className={css.divider} />
        <ul className={css.checkboxList}>
          {equipment.map((item) => (
            <li key={item.id} className={css.listItem}>
              <label className={css.filterItem}>
                <input
                  type="checkbox"
                  name="equipment"
                  value={item.id}
                  checked={activeEquipment.includes(item.id)}
                  onChange={() => onEquipmentChange(item.id)}
                  className={css.hiddenInput}
                />

                <div
                  className={`${css.filterCard} ${activeEquipment.includes(item.id) ? css.active : ""}`}
                >
                  <svg width="32" height="32">
                    <use href={`/img/icons.svg#${item.icon}`}></use>
                  </svg>
                  <span>{item.label}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Vehicle Type */}
      <div className={css.filterGroup}>
        <h3 className={css.groupTitle}>Vehicle type</h3>
        <hr className={css.divider} />
        <ul className={css.checkboxList}>
          {vehicleTypes.map((type) => (
            <li key={type.id} className={css.listItem}>
              <label className={css.filterItem}>
                <input
                  type="radio"
                  name="vehicleType"
                  value={type.id}
                  checked={activeType === type.id}
                  onChange={() => onTypeChange(type.id)}
                  className={css.hiddenInput}
                />

                <div
                  className={`${css.filterCard} ${activeType === type.id ? css.active : ""}`}
                >
                  <svg width="32" height="32">
                    <use href={`/img/icons.svg#${type.icon}`}></use>
                  </svg>
                  <span>{type.label}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button type="button" className={css.searchButton} onClick={onSearch}>
        Search
      </button>
    </aside>
  );
};

export default SidebarFilters;
