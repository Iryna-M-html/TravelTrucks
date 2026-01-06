import css from "./SidebarFilters.module.css";

const SidebarFilters = () => {
  // Список оборудования для фильтрации
  const equipment = [
    { id: "AC", label: "AC", icon: "icon-hugeicons_gas-stove" },
    { id: "transmission", label: "Automatic", icon: "icon-automatic" },
    { id: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
    { id: "TV", label: "TV", icon: "icon-tv" },
    { id: "bathroom", label: "Bathroom", icon: "icon-water-drop" },
  ];

  // Список типов техники
  const vehicleTypes = [
    { id: "panelTruck", label: "Van", icon: "icon-van" },
    { id: "fullyIntegrated", label: "Fully Integrated", icon: "icon-fully" },
    { id: "alcove", label: "Alcove", icon: "icon-alcove" },
  ];

  return (
    <aside className={css.sidebar}>
      {/* Локация */}
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
            <li key={item.id}>
              <label className={css.filterItem}>
                <input
                  type="checkbox"
                  name="equipment"
                  value={item.id}
                  className={css.hiddenInput}
                />
                <div className={css.filterCard}>
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
            <li key={type.id}>
              <label className={css.filterItem}>
                <input
                  type="radio"
                  name="vehicleType"
                  value={type.id}
                  className={css.hiddenInput}
                />
                <div className={css.filterCard}>
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

      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </aside>
  );
};

export default SidebarFilters;
