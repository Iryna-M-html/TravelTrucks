"use client";

import { useState } from "react";
import css from "./NavigationTabs.module.css";
import type { Camper } from "../../types/camper";
import Loading from "@/components/Loading/Loading";

import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import BookingForm from "../BookingForm/BookingForm";

interface CamperTabsProps {
  camper: Camper | null;
}

const NavigationTabs = ({ camper }: CamperTabsProps) => {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );
  if (!camper) {
    return <Loading />;
  }

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
      <div className={css.conteinerTabsBooking}>
        <div className={css.content}>
          {activeTab === "features" ? (
            <div>
              <Features camper={camper} />{" "}
            </div>
          ) : (
            <div>
              <Reviews reviews={camper.reviews} />
            </div>
          )}
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default NavigationTabs;
