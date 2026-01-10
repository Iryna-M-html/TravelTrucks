import { Camper } from "@/types/camper";
import { EQUIPMENT } from "@/types/filters";
import css from "./Features.module.css";

type FeaturesProp = {
  camper: Camper;
};

export default function Features({ camper }: FeaturesProp) {
  if (!camper) return null;

  const detailsMap = [
    { key: "Form", value: camper.form },
    { key: "Length", value: camper.length },
    { key: "Width", value: camper.width },
    { key: "Height", value: camper.height },
    { key: "Tank", value: camper.tank },
    { key: "Consumption", value: camper.consumption },
  ];

  return (
    <div className={css.container}>
      <ul className={css.featuresRow}>
        {/* Трансмісія */}
        <li className={css.feature}>
          <svg className={css.featureIcon}>
            <use href="/img/icons.svg#icon-automatic"></use>
          </svg>
          <span>{camper.transmission}</span>
        </li>

        {/* Двигун */}
        <li className={css.feature}>
          <svg className={css.featureIcon}>
            <use href={`/img/icons.svg#icon-${camper.engine}`}></use>
          </svg>
          <span>{camper.engine}</span>
        </li>

        {/* Динамічне обладнання (включаючи Microwave, Gas, Water) */}
        {EQUIPMENT.map((item) => {
          if (
            item.option !== "automatic" &&
            camper[item.option as keyof Camper]
          ) {
            return (
              <li key={item.option} className={css.feature}>
                <svg className={css.featureIcon}>
                  <use href={`/img/icons.svg#${item.icon}`}></use>
                </svg>
                <span>{item.label}</span>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <div className={css.detailsWrapper}>
        <h3 className={css.title}>Vehicle details</h3>
        <hr className={css.separator} />
        <ul className={css.detailList}>
          {detailsMap.map(({ key, value }) => (
            <li key={key} className={css.detailItem}>
              <span>{key}</span>
              <span className={css.detailValue}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
