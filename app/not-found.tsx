import React from "react";
import css from "./not-found.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page not found | TravelTrucks",
  description:
    "This page does not exist. Please check the URL or return to the TravelTrucks homepage.",
  openGraph: {
    title: "404 — Page not found | TravelTrucks",
    description:
      "This page does not exist. Please check the URL or return to the TravelTrucks homepage.",
    url: "https://travel-trucks.example.com/404",

    type: "website",
    siteName: "TravelTrucks",
  },
};

const NotFound = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <h1 className={css.title}>404 - Page not found</h1>
        <p className={css.description}>
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
