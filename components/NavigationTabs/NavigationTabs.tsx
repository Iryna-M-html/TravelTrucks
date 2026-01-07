"use client";

import { useState } from "react";
import css from "./NavigationTabs.module.css";
import type { Camper } from "../../types/camper";
// Імпортуйте ваші компоненти контенту
// import Features from "../Features/Features";
// import Reviews from "../Reviews/Reviews";

interface CamperTabsProps {
  campers: Camper[];
}

const NavigationTabs = ({ camper }: CamperTabsProps) => {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );

  return (
    <div className={css.container}>
      {/* Навігація вкладок */}
      <div className={css.tabsNav}>
        <button
          type="button"
          className={`${css.tab} ${activeTab === "features" ? css.active : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          type="button"
          className={`${css.tab} ${activeTab === "reviews" ? css.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Контент вкладок */}
      <div className={css.content}>
        {activeTab === "features" ? (
          <div>{/* <Features camper={camper} /> */} Контент Features</div>
        ) : (
          <div>
            {/* <Reviews reviews={camper.reviews} /> */} Контент Reviews
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationTabs;
